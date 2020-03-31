import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import SectionTitle from '../UI/SectionTitle'
import { prefixer, getData } from '../utils';
import List from '../UI/List';
import LI from '../UI/List/Item';
import Link from "next/Link";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class CarRental extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('carrental')
      .perPage(3)
      .embed();

    if (categories.length > 0) {
      const posts = await wp
        .posts()
        .category(categories[0].id)
        .embed();
      return { categories, posts };
    }

    return { categories };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <Layout>
          <div className={`service-area-wrapper`}>
            <div className="service-area-top" style={{ backgroundImage: `url("${prefixer('/images/ub_city.png')}")` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-xl-5 m-auto text-center">
                    <SectionTitle variant="light" title="Our Services" heading="Car rental" />
                  </div>
                </div>
              </div>
            </div>

            <div className="service-content-area">
              <div className="container">
                <div className="row mtn-30">
                  {posts.map(post => (
                    <div className="col-md-6 col-lg-4">
                      <div key={post.slug} className="service-item">
                        <figure className="service-thumb">
                          <Link href={prefixer(`/car-rental-more/${post.slug}`)}>
                            <a>
                              <img src={getData(post._embedded, 'image')} />
                            </a>
                          </Link>
                          <figcaption className="service-txt">
                            <h5>{post.title.rendered}</h5>
                          </figcaption>
                        </figure>

                        <div className="service-content">
                          <div className="service-content-inner">
                            <h5>
                              <Link href={prefixer(`/car-rental-more/${post.slug}`)}>
                                <a className="stretched-link">
                                  {post.title.rendered}
                                </a>
                              </Link>
                            </h5>
                            <List classes="price-list">
                              <LI> {post.acf.car_type}</LI>
                              <LI>Max passenger {post.acf.max_passenger}</LI>
                              <LI>Door {post.acf.car_door}</LI>
                              <LI>Top speed {post.acf.top_speed}km/h</LI>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div >
          <BrandLogo />
          <Funfact classes="sp-top" />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  };
}

export default CarRental;