import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../UI/SectionTitle";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config.apiUrl });

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

    const { content, cover_image } = post.acf;

    return (
      <>
        <Layout>
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
                        <div data-erxes-embed={form_id} style="width:900px;height:800px"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout >
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NN7QKCX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <MobileMenu />
      </>
    );
  }
}
