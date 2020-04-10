import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
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

    const { content, cover_image, price, theme, duration, group_size, intro_text, why_choose_this_tour } = post.acf;

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
          <PageWrapper classes={'tour-details-wrapper sm-top'}>
            <div className="col-12">
              <div className="tour-details-top">
                <div className="row">
                  <div className="col-md-5">
                    <div className="tour-pic mb-sm-35">
                      <img src={post.acf.image} alt={post.title.rendered} />
                    </div>
                  </div>
                  <div className="col-md-7 ml-auto">
                    <div className="tour-desc">
                      <h2><p dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h2>
                      <div className="contact-info mt-30">
                        {group_size ? <p><strong>Group size</strong> {group_size}</p> : ''}
                        {duration ? <p><strong>Duration</strong> {duration}</p> : ''}
                        {theme ? <p><strong>Theme</strong> <span dangerouslySetInnerHTML={{ __html: theme }} /></p> : ''}
                        {price ? <p><strong>From</strong> {price}</p> : ''}

                      </div>
                      <div>
                        <div className='li-top' />
                        <strong>Intro text</strong>
                        <hr />
                        <List classes="intro-list">
                          <div dangerouslySetInnerHTML={{ __html: intro_text }} />
                        </List>
                        <div className='li-top' />
                        <strong>Why choose this tour</strong>
                        <hr />
                        <List classes="intro-list">
                          <div dangerouslySetInnerHTML={{ __html: why_choose_this_tour }} />
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-details-bottom sm-top-wt">
                <div className="row mtn-50">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="tour-education mem-achieve-item">
                      <SectionTitle
                        heading={'TOUR ITINERARY'}
                        text=""
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="col-12">
                    <div className="education-content-wrap mt-60">
                      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-details-middle sm-top-wt">
                <div className="row mtn-30">
                  <div className="col-xl-12 m-auto text-center">
                    <div className="tour-education mem-achieve-item">
                      <SectionTitle
                        heading={'INCLUSIONS'}
                        text=""
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="col-lg-6">
                    <div className="my-history-area mem-achieve-item">
                      <h4>INCLUDES</h4>
                      <div className="history-content-wrap mt-40 mt-sm-30">
                        <List classes="include-list">
                          <div dangerouslySetInnerHTML={{ __html: post.acf.price_included }} />
                        </List>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="my-history-area mem-achieve-item">
                      <h4>NOT INCLUDES</h4>
                      <div className="history-content-wrap mt-40 mt-sm-30">
                        <List classes="include-list">
                          <div dangerouslySetInnerHTML={{ __html: post.acf.not_include }} />
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-details-middle sm-top-wt">
                <div className="row mtn-30">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="tour-education mem-achieve-item">
                      <SectionTitle
                        heading={'PRACTICAL INFORMATION'}
                        text=""
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="col-12">
                    <div className="skill-experience-area mem-achieve-item">
                      <h4>Practical information</h4>
                      <div className="skill-bar-wrap mt-40 mt-sm-30">
                        <List classes="skill-list">
                          <div dangerouslySetInnerHTML={{ __html: post.acf.good_to_know }} />
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-details-middle sm-top-wt">
                <div className="row mtn-30">
                  <div className="col-12">
                    <div className="col-xl-6 m-auto text-center">
                      <Link href={prefixer('/book-now?form_id=' + post.acf.erxes_form_id + '&obj_id=' + post.slug)}>
                        <a className='btn btn-primary'><i className="fa fa-star"></i> Book now
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
