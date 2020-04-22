import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../UI/SectionTitle";
import BrandLogo from '../components/BrandLogo';
import BlueWolfBook from '../components/BlueWolfBook';
import Disqus from "disqus-react"
import { defaultCoverImage } from "../components/layouts/constants";
import Share from '../components/Share';
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

    let url = '';

    if (process.browser) {
      url = window.location.href
    }

    const { content, cover_image, price, theme, duration, group_size, intro_text, why_choose_this_tour } = post.acf;

    const disqusShortname = "bluewolftravel";
    const disqusConfig = {
      url,
      identifier: post.slug,
      title: post.title.rendered
    }

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
                <div className="col-md-8 ml-auto">
                  <div className="tour-desc">
                    <h2><p dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h2>
                    <div className="contact-info mt-30">
                      {theme ? <p><strong>Theme</strong> <span dangerouslySetInnerHTML={{ __html: theme }} /></p> : ''}
                      <hr />
                      {price ? <p><strong>From</strong> <span>{price}</span></p> : ''}
                      <hr />
                      {group_size ? <p><strong>Group size</strong><span>{group_size}</span></p> : ''
                      }
                      <hr />
                      {duration ? <p><strong>Duration</strong> <span>{duration}</span></p> : ''}
                      <hr />
                      <p><strong>Intro text</strong></p>
                      <List classes="intro-list">
                        <div dangerouslySetInnerHTML={{ __html: intro_text }} />
                      </List>
                      <hr />
                      <p><strong>Why choose this tour</strong>
                      </p>
                      <List classes="intro-list">
                        <div dangerouslySetInnerHTML={{ __html: why_choose_this_tour }} />
                      </List>
                      <hr />
                      <p><strong>Services included</strong>
                      </p>
                      <List classes="intro-list">
                        <div dangerouslySetInnerHTML={{ __html: post.acf.price_included }} />
                      </List>
                      <hr />
                      <p><strong>Services not included</strong>
                      </p>
                      <List classes="not-include-list">
                        <div dangerouslySetInnerHTML={{ __html: post.acf.not_include }} />
                      </List>
                      <div className="col-xl-6 m-auto text-center">
                        <div className="tour-education mem-achieve-item">
                          <SectionTitle
                            heading={'TOUR ITINERARY'}
                          />
                        </div>
                        <hr />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="sticky-content ">
                    <div className="tour-pic mb-sm-35">
                      <img src={post.acf.image} alt={post.title.rendered} />
                    </div>
                    <div className='white-box'>
                      <div className='from'>
                        {duration ? <p>{duration}</p> : ''}
                      </div>
                      <div className='price'>
                        <span>{price ? <p><strong>From</strong> {price}</p> : ''}</span>
                      </div>
                      <Link href={prefixer('/book-now?form_id=' + post.acf.erxes_form_id + '&obj_id=' + post.slug)}>
                        <a className='btn btn-brand'><i className="fa fa-star"></i> Book now
                       </a>
                      </Link>
                      <List classes='features li-top'>
                        <LI>
                          <i className='fa fa-tripadvisor'></i> Trip Advisor
                        </LI>
                        <LI>
                          <i className='fa fa-heart'></i> Unforgettable
                        </LI>
                        <LI>
                          <i className='fa fa-cog'></i> Safe
                        </LI>
                      </List>
                    </div>
                    <Share title={post.title.rendered} path={url} />
                  </div>
                </div>
              </div>
              <div className="tour-details-middle ul-top">
                <div className="row mtn-30">
                  <div className="col-xl-6 m-auto text-center">
                    <div className="tour-education mem-achieve-item">
                      <SectionTitle
                        heading={'PRACTICAL INFORMATION'}
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="col-12">
                    <div className="skill-experience-area mem-achieve-item">
                      <List classes="skill-list">
                        <div dangerouslySetInnerHTML={{ __html: post.acf.good_to_know }} />
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-details-middle sm-top-wt">
                <div className="row mtn-30">
                  <div className="col-12">
                    <div className="col-xl-6 m-auto text-center">
                      <Link href={prefixer('/book-now?form_id=' + post.acf.erxes_form_id + '&obj_id=' + post.slug)}>
                        <a className='btn btn-brand'><i className="fa fa-star"></i> Book now
                       </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ul-top'>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </PageWrapper>
          <BrandLogo />
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}
