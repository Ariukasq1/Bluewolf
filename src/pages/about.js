import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import AboutCategories from '../components/AboutCategories';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { prefixer } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class About extends React.Component {
  static async getInitialProps(context) {
    const { slug } = context.query;

    const pages = await wp
      .pages()
      .slug(slug)
      .perPage(40)
      .embed();

    return { pages };
  }

  renderContent() {
    const { pages } = this.props;

    if (pages.length === 0) {
      return (
        <div className="post-item centered">
          <div className="empty-state">
            <h3>
              Sorry
            </h3>
            <p>There are no post in this category yet.</p>
          </div>
        </div>
      )
    }

    return (
      <>
        <div className='blog-content-wrapper blog-list'>
          <div className="row mtn-30">
            <div className='col-12'>
              {pages.map(page => {
                return (
                  <div key={page.slug} className="post-item">
                    <div classNane="row align-items-center">
                      <div className="post-content">
                        <h2 className="h5">
                          <Link href={prefixer("/page/" + page.slug)}>
                            <a>
                              {page.title.rendered}
                            </a>
                          </Link>
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: page.excerpt.rendered
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { pages } = this.props;

    if (pages.length === 0) return <Error statusCode={404} />;

    const title = pages[0].name;

    return (
      <>
        <Layout title={title}>
          <PageHeader
            bgImg={prefixer('/images/Gobi-Getty.jpg')}
            title={'About Us'}
            content={'BlueWolf Travel - the team of local travel experts organizing discovery & adventure oriented tours for groups, incentives and  individuals. We offer programs that cover best travel places, must-see attractions of Mongolia land, and always try  provide  a chance to encounter authentic nomadic life, meet real people and try adventure activities that Mongolia has to offer proudly. '}
          />
          <PageWrapper classes="post-page-content-area sp-y">
            <div className='col-lg-9 null'>
              {this.renderContent()}
            </div>

            <Sidebar classes={'col-lg-3 mtn-40'}>
              <AboutCategories />
            </Sidebar>

          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default About; 