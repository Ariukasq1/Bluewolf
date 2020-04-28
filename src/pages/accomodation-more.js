import React, { Fragment } from 'react';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import AccomoSidebar from "../components/AccomoSidebar";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import List from "../UI/List";
import LI from "../UI/List/Item";
import SlickSlider from "../UI/Slick";
import Config from "../config";
import WPAPI from 'wpapi';
import BrandLogo from '../components/BrandLogo';
import BlueWolfBook from '../components/BlueWolfBook';
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer, getData } from "../utils";

const wp = new WPAPI({ endpoint: Config().apiUrl });

export default class extends React.Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    let apiMethod = wp.posts();

    const post = await apiMethod
      .slug(slug)
      .embed()
      .then(data => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post } = this.props;

    if (!post.title) {
      return <Error statusCode={404} />;
    }

    const { content, cover_image, distance, check_in, check_out } = post.acf;

    return (
      <Fragment>
        <Layout>
          <PageHeader
            bgImg={cover_image ? cover_image : prefixer('/images' + defaultCoverImage)}
            title={<p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
            content={content ? content : ''}
          />

          <PageWrapper classes="sm-top service-details-wrapper">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="service-thumbnail-wrapper">
                  <SlickSlider settings={{
                    className: "service-details-thumb",
                    arrows: true,
                    dots: true
                  }}>
                    <img src={getData(post._embedded, 'image')} />
                  </SlickSlider>
                </div>

                <div className="service-details-info">
                  <div className="about-service mt-50 mt-sm-35">
                    <h3>{post.title.rendered}</h3>
                    {
                      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    }
                    <List classes="location-feature mt-30">
                      <LI><i className="fa fa-map-marker"></i> {distance}
                      </LI>
                      <LI><i className='fa fa-clock-o'></i> Check in time: {check_in}</LI>
                      <LI><i className='fa fa-clock-o'></i> Check out out: {check_out}</LI>
                    </List>
                  </div>
                </div>
              </div>
            </div>

            <AccomoSidebar />
          </PageWrapper>
          <BrandLogo />
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </Fragment >
    );
  }
}

