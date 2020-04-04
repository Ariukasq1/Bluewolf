import React from 'react';
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import SidebarItem from "../components/Sidebar/SidebarItem";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import Link from "next/link";

const wp = new WPAPI({ endpoint: Config().apiUrl });

class CarRental extends React.Component {
  static async getInitialProps() {
    let apiMethod = wp.pages();

    const page = await apiMethod
      .slug('booking-form')
      .embed()
      .then(data => {
        return data[0];
      });

    return { page };
  }

  render() {
    const { page } = this.props;

    if (!page.title) {
      return <Error statusCode={404} />;
    }

    const { content, cover_image } = page.acf;

    return (
      <>
        <Layout>
          <PageHeader
            bgImg={cover_image ? cover_image : prefixer('/images' + defaultCoverImage)}
            title={<p dangerouslySetInnerHTML={{
              __html: page.title.rendered
            }} />}
            content={content ? content : ''}
          />
          <PageWrapper classes="sm-top service-details-wrapper">
            <div className='col-lg-9'>
              <div className="service-details-content">
                <div className="post-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: page.content.rendered
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <List classes="service-list">
                <h2 className='h4'>Destinations</h2>
                <hr></hr>
                <div className="destination-item">
                  <figure className="link-pic">
                    <Link href={`${prefixer('/tour-category/mongolia')}`}>
                      <a>
                        <img src={prefixer('/images/AltaiNomads.jpg')} alt='Mongolia' />
                      </a>
                    </Link>
                  </figure>
                  <div className="tours-info">
                    <h5>
                      <Link href={`${prefixer('/tour-category/mongolia')}`} >
                        <a>Mongolia</a>
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="destination-item">
                  <figure className="link-pic">
                    <Link href={`${prefixer('/tour-category/kazakhstan')}`}>
                      <a>
                        <img src={prefixer('/images/Белуха.jpg')} alt='Mongolia' />
                      </a>
                    </Link>
                  </figure>
                  <div className="tours-info">
                    <h5>
                      <Link href={`${prefixer('/tour-category/kazakhstan')}`} >
                        <a>Kazakhstan</a>
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="destination-item">
                  <figure className="link-pic">
                    <Link href={`${prefixer('/tour-category/russian-altai')}`}>
                      <a>
                        <img src={prefixer('/images/KhanTengri.jpg')} alt='Mongolia' />
                      </a>
                    </Link>
                  </figure>
                  <div className="tours-info">
                    <h5>
                      <Link href={`${prefixer('/tour-category/russian-altai')}`} >
                        <a>Russian Altai</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              </List>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  };
}

export default CarRental;