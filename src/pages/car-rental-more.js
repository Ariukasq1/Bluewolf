import React, { Fragment } from 'react';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import SlickSlider from "../UI/Slick";
import Config from "../config";
import WPAPI from 'wpapi';
import BlueWolfBook from '../components/BlueWolfBook';
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer, getData } from "../utils";
import RentCarSidebar from '../components/RentCarSidebar';

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

    const { content, cover_image, max_passenger, car_type, car_door, top_speed, price, cash, gear_box, wheel_position, air_condition, car_engine } = post.acf;

    return (
      <Fragment>
        <Layout>
          <PageHeader
            bgImg={cover_image ? cover_image : prefixer('/images' + defaultCoverImage)}
            title={<div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
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
                  <div className='row'>
                    <h4>Specifications</h4>
                  </div>
                  <hr />
                  <div className="car-rental-content service-details-page">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/rule.png')} alt='rule' />
                          </div>
                          <div className="icon-box__info">
                            <p>Category: {car_type}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/human.png')} alt='human' />
                          </div>
                          <div className="icon-box__info">
                            <p>Maximum passenger:  {max_passenger}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/doors.png')} alt='doors' />
                          </div>
                          <div className="icon-box__info">
                            <p>Door: {car_door}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/mile.png')} alt='mile' />
                          </div>
                          <div className="icon-box__info">
                            <p> Top speed: {top_speed} km/h</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/gear.png')} alt='gear' />
                          </div>
                          <div className="icon-box__info">
                            <p>Gear box: {gear_box}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/rule.png')} alt='rule1' />
                          </div>
                          <div className="icon-box__info">
                            <p>Wheel position: {wheel_position}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/condition.png')} alt='condition' />
                          </div>
                          <div className="icon-box__info">
                            <p>{air_condition}</p>
                          </div>
                        </div>
                        <div className="icon-box-item">
                          <div className="icon-box__icon">
                            <img src={prefixer('/images/car-rental/engine.png')} alt='engine' />
                          </div>
                          <div className="icon-box__info">
                            <p>Engine: {car_engine}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="car-rental-more mt-50 mt-sm-35">
                  <div className="car-rental-content service-details-page">
                    <div className="row">
                      <div className="col-md-6">
                        <h4>Price</h4>
                      </div>
                      <div className="col-md-6">
                        <h5>Avg price per day: <span>{cash} {price}</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RentCarSidebar />
          </PageWrapper>
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </Fragment >
    );
  }
}

