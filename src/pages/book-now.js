import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../UI/SectionTitle";
import Config from "../config";
import WPAPI from 'wpapi';
import Head from 'next/head'

const wp = new WPAPI({ endpoint: Config().apiUrl });

const GA_TRACKING_ID = 'GTM-NN7QKCX';

export default () => {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${GA_TRACKING_ID}');`
        }}>
        </script>
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />
      {/* <Layout>
          <PageHeader
            bgImg={cover_image}
            title={<p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
            content={content}
          />
          <PageWrapper classes={'member-details-wrapper sm-top'}>
            <div className="col-12">
              <div className="member-details-middle sm-top-wt">
                <div className="row mtn-50">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="member-education mem-achieve-item">
                      <SectionTitle
                        heading={'Practical information'}
                        text=""
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="skill-experience-area mem-achieve-item">
                      <h4>Practical information</h4>
                      <div className="skill-bar-wrap mt-40 mt-sm-30">
                        <div data-erxes-embed="tNgqcR" style={{ width: "900px", height: "800px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout > */}
      <div data-erxes-embed="jM9mMG" style={{ width: "900px", height: "800px" }}></div>
      <MobileMenu />
    </>
  );
}
