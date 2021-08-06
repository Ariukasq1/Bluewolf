import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer } from '../utils';

function BookNow(props) {
  const { form_id, obj_id } = props.router.query;

  if (!form_id) {
    return null;
  }

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.erxesSettings = {
            forms: [{
              brand_id: "JPshak",
              form_id: "${form_id}",
            }],
          };
          
          (function() {
            var script = document.createElement('script');
            script.src = "https://bluewolf.app.erxes.io/widgets/build/formWidget.bundle.js";
            script.async = true;

            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
          })();` }} />
      </Head>
      <Layout>
        <PageHeader
          bgImg={prefixer('/images' + defaultCoverImage)}
          title={obj_id}
          content={''}
        />
        <PageWrapper classes="sm-top service-details-wrapper">
          <div className="service-details-content">
            <div data-erxes-embed={form_id} style={{ width: '900px', height: '720px' }}></div>
          </div>
        </PageWrapper>
        <CallToAction />
      </Layout >
      <MobileMenu />
    </>
  );
}

export default withRouter(BookNow);