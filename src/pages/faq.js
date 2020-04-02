import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import SectionTitle from '../UI/SectionTitle'
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Faq extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('faq')
      .perPage(40)
      .embed();

    if (categories.length > 0) {
      const posts = await wp
        .posts()
        .category(categories[0].id)
        .embed();
      return { categories, posts };
    }

    return { categories };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <Layout>
          <div className="flight-plan-area sm-top">
            <div className="container">
              <div className="row">
                <div className="col-12" >
                  <SectionTitle
                    heading="FAQ"
                  />
                </div>
              </div>

              <div className="row mtn-30">
                <div className='faq-list'>
                  <div class="accordion" id="accordionExample">
                    {
                      posts.map(post => (
                        <div key={post.slug} class="card">
                          <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                              <button class="btn" type="button" data-toggle="collapse" data-target='#collapse{post.slug}' aria-expanded="true" aria-controls="collapseOne">
                                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              </button>
                            </h2>
                          </div>

                          <div id="collapse{post.slug}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BrandLogo />
          <Funfact classes="sp-top" />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  };
}

export default Faq;