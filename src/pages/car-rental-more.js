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
import { defaultCoverImage } from "../components/layouts/constants";
import Text from "../UI/Text";
import { prefixer, getData } from "../utils";

const wp = new WPAPI({ endpoint: Config.apiUrl });

export default class extends React.Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;
    console.log('slug:', slug);

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

    const { content, cover_image, max_passenger, car_type, car_door } = post.acf;

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

                <div className="car-rental-more mt-50 mt-sm-35">
                  <h4>Specifications</h4>
                  <Text styles={{ marginBottom: 20 }}>
                    Neque porro quisquam est, qui dolorem ipsum
                        </Text>

                  <div className="car-rental-content service-details-page">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/rule.png')} alt='rule' />
                          </div>
                          <div className="icon-box__info">
                            <p>{car_type}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/human.png')} alt='human' />
                          </div>
                          <div className="icon-box__info">
                            <p>{max_passenger}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/doors.png')} alt='doors' />
                          </div>
                          <div className="icon-box__info">
                            <p>{car_door}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AccomoSidebar />
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </Fragment >
    );
  }
}

