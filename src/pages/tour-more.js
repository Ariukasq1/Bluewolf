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
import RelatedTours from '../components/Tour/RelatedTours';
import DOMParser from 'dom-parser'
import Collapse from 'react-bootstrap/Collapse'


const wp = new WPAPI({ endpoint: Config().apiUrl });
const arrow_down = "/images/down-arrow.svg"
export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: [],
      display_main: true,
    };

  }

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


  CleanText(text) {
    var replaceHtmlEntites = (function () {

      var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
      var translate = {
        nbsp: " ",
        amp: "&",
        quot: '"',
        lt: "<",
        gt: ">"
      };
      return function (s) {
        return s.replace(translate_re, function (match, entity) {
          return translate[entity];
        });
      };
    })();

    let cleanText = text.replace(/^\xa0*([^\xa0]*)\xa0*$/g, "");
    cleanText = replaceHtmlEntites(text);
    return cleanText;
  }

  renderItinerary(ret, i) {
    let event = { id: 0, title: '', desc: '' };
    event.id = i;
    let counter = 0;

    ret[i].childNodes.map(el => {
      if (el.nodeType == 1) {
        if (counter == 0) {
          el.childNodes.map(el => {
            if (typeof (el.text) != "undefined") { event.title = event.title + el.text + ' '; }
          })
        }
        if (counter > 0) {
          el.childNodes.map(el => {
            if (typeof (el.text) != "undefined") { event.desc = event.desc + el.text + '</br>'; }
          });
        }
        counter++;
      }
    });

    counter = 0;

    event.title = this.CleanText(event.title);
    event.desc = this.CleanText(event.desc);
    this.state.display[i] = false;
    this.state.data[i] = event;
  }
  htmCode(input) {
    var ret;
    var doc = new DOMParser().parseFromString(
      input,
      "text/html"
    );

    ret = doc.getElementsByTagName("tr");

    for (let i = 0; i < ret.length; i++) {
      this.renderItinerary(ret, i)
    }
  }

  changeValue(index) {

    if (index === undefined) {
      return;
    }
    let values = [...this.state.display];
    values[index] = !this.state.display[index];
    this.setState({ display: values });
  }



  render() {

    const { post } = this.props;
    // if (!post.title) {
    //   return <Error statusCode={404} />;
    // }
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
                      <div className="days">
                        {this.state.display.length === 0 && this.htmCode(post.content.rendered)}
                        {/* <div style={{textAlign: "right",cursor: "pointer"}} aria-controls="collapse-main"
                          aria-expanded={this.state.display_main}
                        ><b onClick={() => {this.setState({display_main: !this.state.display_main})}}>Show all</b><img style={{marginLeft: "10px"}} src="/images/down-arrow.svg" /> </div> */}
                        <Collapse in={this.state.display_main}>
                          <div id="collapse-main">
                            {this.state.data.map(item => (
                              <div key={item.id}
                                className="collapse-item"
                                onClick={() => { this.changeValue(item.id) }}
                                aria-controls="collapse"
                                aria-expanded={this.state.display[item.id]}
                              >
                                <div className="collapse-name">
                                  <div className="day"><b>{item.title}</b></div>
                                  <div className="arrow">
                                    <img src={arrow_down} />
                                  </div>
                                </div>

                                <Collapse in={this.state.display[item.id]}>
                                  <div id="collapse">
                                    <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                                  </div>
                                </Collapse>
                              </div>
                            ))}
                          </div>
                        </Collapse>

                      </div>


                      {/* <div style={{backgroundColor: 'orange'}} className="days" dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
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
                      <a className='btn btn-brand' href={'https://payment.bluewolftravel.com/plugins/bwp/payment/?form_id=' + post.acf.erxes_form_id + '&obj_id=' + post.slug}>
                        <i className="fa fa-star"></i> Book now
                       </a>
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
              <RelatedTours perPage={3} />
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