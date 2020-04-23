import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import List from '../UI/List';
import Link from "next/link";
import { prefixer, getData } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import { withRouter } from 'next/router';
import BrandLogo from '../components/BrandLogo';
import BlueWolfBook from '../components/BlueWolfBook';
import TourSidebar from '../components/TourSidebar';
import Layout from '../components/Layout';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Category extends React.Component {
  static async getInitialProps(context) {
    const { slug, ids } = context.query;

    const categories = await wp
      .categories()
      .slug(slug)
      .perPage(40)
      .embed();

    if (categories.length > 0) {
      let posts = await wp
        .posts()
        .categories(categories[0].id)
        .embed();

      if (ids) {
        const categoryIds = ids.split(',').map(id => parseInt(id, 10));

        posts = posts.filter(post => {
          return categoryIds.every((categoryId) => post.categories.includes(categoryId));
        });
      }

      return { categories, posts };
    }

    return { categories };
  }

  renderContent() {
    const { posts } = this.props;

    if (posts.length === 0) {
      return (
        <div className="col-lg-9 null">
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
        <div className="col-lg-9 null">
          <div className='post-content-wrapper false'>
            <div className="row mtn-30">
              {
                posts.map(post => {
                  return (
                    <div key={post.id} className='col-md-6'>
                      <div className="post-item">
                        <figure className="post-thumb">
                          {post.acf.discount ? <span className="discount">{post.acf.discount} </span> : ''}
                          <Link href={prefixer(`/tour-more/${post.slug}`)}>
                            <a>
                              <img src={getData(post._embedded, 'image')} alt={post.title} />
                            </a>
                          </Link>
                        </figure>
                        <div className="post-content">
                          <h2 className="h6">
                            <Link href={prefixer(`/tour-more/${post.slug}`)}>
                              <a>
                                <div className="nowrap-text"
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.rendered
                                  }} />
                              </a>
                            </Link>
                          </h2>
                          <List classes="intro-list">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.acf.intro_text
                              }} />
                          </List>
                          <div className="post-meta">
                            {post.acf.price ?
                              <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                <a className='post-price'>From: {post.acf.price}</a>
                              </Link> : null
                            }
                            {post.acf.group_size ?
                              <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                <a><i className="fa fa-user" aria-hidden="true"></i>&nbsp; {post.acf.group_size}</a>
                              </Link>
                              : null
                            }
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

    const title = categories[0].title;

    return (
      <>
        <Layout title={title}>
          <PageHeader
            bgImg={prefixer('/images/BGoat.jpg')}
            title={`Tours`}
            content={`Blue Wolf Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators.`}
          />
          <PageWrapper classes="post-page-content-area sp-y">
            {this.renderContent()}

            <TourSidebar />
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

export default withRouter(Category);