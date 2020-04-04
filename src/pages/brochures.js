import React from 'react';
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import SidebarItem from "../components/Sidebar/SidebarItem";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { prefixer } from '../utils';
import { defaultCoverImage } from "../components/layouts/constants";
import Config from "../config";
import WPAPI from 'wpapi';


const wp = new WPAPI({ endpoint: Config().apiUrl });

class WhatToPack extends React.Component {
  static async getInitialProps() {
    let apiMethod = wp.pages();

    const page = await apiMethod
      .slug('brochures')
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
            <div className='col-lg-7'>
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
            <div className='col-lg-5'>
              <SidebarItem>
                <h2 className='h5'>{page.acf.brochure_title}</h2>
                <List classes="service-list">
                  <LI><p dangerouslySetInnerHTML={{ __html: page.acf.link }} /></LI>
                </List>
              </SidebarItem>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  };
}

export default WhatToPack;