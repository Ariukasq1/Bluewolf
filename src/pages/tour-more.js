import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import TimelineWrap from "../components/Timeline";
import SectionTitle from "../UI/SectionTitle";
import { defaultCoverImage } from "../components/layouts/constants";
import List from "../UI/List";
import LI from "../UI/List/Item";
import Link from "next/link";
import Config from "../config";
import { prefixer } from '../utils';
import WPAPI from 'wpapi';

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

    const { content, cover_image, price, theme, duration, group_size } = post.acf;

    return (
      <>
        <Layout>
          <PageHeader
            bgImg={cover_image ? cover_image : prefixer('/images' + defaultCoverImage)}
            title={<p dangerouslySetInnerHTML={{
              __html: post.title.rendered
            }} />}
            content={content ? content : ''}
          />
          <PageWrapper classes={'member-details-wrapper sm-top'}>
            <div className="col-12">
              <div className="member-details-top">
                <div className="row">
                  <div className="col-md-12">
                    <div className="member-desc">
                      <h2><p dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h2>
                      <h5><p dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h5>
                      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                      <div className="contact-info mt-50">
                        <p><strong>Theme</strong> <span dangerouslySetInnerHTML={{ __html: theme }} /></p>
                        <p><strong>Duration</strong> {duration}</p>
                        <p><strong>Group size</strong> {group_size}</p>
                        <p><strong>From</strong> {price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-details-bottom sm-top-wt">
                <div className="row mtn-50">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="member-education mem-achieve-item">
                      <SectionTitle
                        heading={'TOUR ITINERARY'}
                        text=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="education-content-wrap mt-60">
                      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-details-middle sm-top-wt">
                <div className="row mtn-50">
                  <div className="col-xl-12 m-auto text-center">
                    <div className="member-education mem-achieve-item">
                      <SectionTitle
                        heading={'PRICES & INCLUSIONS'}
                        text=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="skill-experience-area mem-achieve-item">
                      <h4>INCLUDES</h4>
                      <div className="skill-bar-wrap mt-40 mt-sm-30">
                        <List>
                          <LI>
                            <span dangerouslySetInnerHTML={{ __html: post.acf.price_included }} />
                          </LI>
                        </List>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="my-history-area mem-achieve-item">
                      <h4>NOT INCLUDES</h4>

                      <div className="history-content-wrap how-we-works-content mt-40 mt-sm-30">
                        <List>
                          <LI>
                            <span dangerouslySetInnerHTML={{ __html: post.acf.not_include }} />
                          </LI>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <List>
                          <LI>
                            <span dangerouslySetInnerHTML={{ __html: post.acf.good_to_know }} />
                          </LI>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-details-middle sm-top-wt">
                <div className="row mtn-50">
                  <div className="col-12">
                    <div className="col-xl-6 m-auto text-center">
                      <Link href={prefixer('/book-now/form_id=' + post.acf.erxes_form_id + '&obj_id=' + post.slug)}>
                        <a className='btn btn-primary'><i class="fa fa-star"></i> Book now
                    </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}
