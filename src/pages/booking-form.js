import React from 'react';
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import DestinationSidebar from '../components/DestinationSidebar';

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
            <DestinationSidebar />
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  };
}

export default CarRental;