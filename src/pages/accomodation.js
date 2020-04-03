import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import AccomoSidebar from '../components/AccomoSidebar';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import { prefixer, getData } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Accomodation extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('accomodations')
      .embed();

    const posts = await wp
      .posts()
      .category(categories[0].id)
      .perPage(20)
      .embed();

    return { posts, categories };
  }

  renderContent() {
    const { posts } = this.props;

    if (posts.length === 0) {
      return (
        <div className="blog-content-wrapper blog-list">
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
              {posts.map(post => {
                return (
                  <div key={post.slug} className="blog-item">
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <figure className="blog-thumb">
                          <Link href={prefixer(`/accomodation-more/${post.slug}`)}>
                            <a>
                              <img src={getData(post._embedded, 'image')} alt={post.name} />
                            </a>
                          </Link>
                        </figure>
                      </div>

                      <div className="col-md-7">
                        <div className="blog-content">
                          <h2 className="h5">
                            <Link href={prefixer(`/accomodation-more/${post.slug}`)}>
                              <a>
                                {post.title.rendered}
                              </a>
                            </Link>
                          </h2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered
                            }}
                          />
                          <div className="blog-meta">
                            <Link href={prefixer(`/accomodation-more/${post.slug}`)}><a>By:
                              {post.acf.distance}
                            </a></Link>
                            <Link href={prefixer(`/accomodation-more/${post.slug}`)}><a>
                              Price: {post.acf.price}
                            </a>
                            </Link>
                          </div>
                        </div>
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
    const { categories } = this.props;

    if (categories.length === 0) return <Error statusCode={404} />;

    const title = categories[0].name;

    return (
      <>
        <Layout title={title}>
          <PageHeader
            bgImg={prefixer('/images/ub_cover.jpg')}
            title={title}
            content={'BlueWolf Travel - the team of local travel experts organizing discovery & adventure oriented tours for groups, incentives and  individuals. '}
          />

          <PageWrapper classes="post-page-content-area sp-y">
            <div className='col-lg-9 null'>
              {this.renderContent()}
            </div>

            <AccomoSidebar />
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default Accomodation; 