import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import BlueWolfBook from "../components/BlueWolfBook";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import SectionTitle from '../UI/SectionTitle';
import { prefixer } from '../utils';
import List from '../UI/List';
import LI from '../UI/List/Item';
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Flight extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('flight')
      .perPage(20)
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
          <PageHeader
            bgImg={prefixer('/images/airplane.jpg')}
            title={'Air plane'}
            content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
          />

          <div className="flight-plan-area sm-top">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center" >
                  <SectionTitle
                    title="Flighting Plan"
                    heading="Our Best <br>Domestic Flights"
                  />
                </div>
              </div>

              <div className="row mtn-30">
                {
                  posts.map(post => (
                    <div key={post.slug} className='col-md-6 col-lg-4'>
                      <div className="flight-plan-item">
                        <div className="flight-plan-header">
                          <h6 className="plan-name">
                            {post.title.rendered}
                            </h6>
                          <div className="plan-main">
                            <span className="img">
                              {post.acf.logo && <img src={post.acf.logo} alt={post.title} />}
                            </span>
                          </div>
                        </div>
                        <div className="flight-plan-body">
                          <List classes="price-list">
                            <LI>Departure: {post.acf.departure}</LI>
                            <LI>Flight duration: {post.acf.flight_duration}</LI>
                            <LI>Avg.One way: {post.acf.avgone_way}</LI>
                            <LI>Avg.Two way: {post.acf.avgtwo_way}</LI>
                          </List>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <BrandLogo />
          <BlueWolfBook classes="sp-top" />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  };
}

export default Flight;