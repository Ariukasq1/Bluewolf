import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Layout from '../components/Layout';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import LIST from '../UI/List';
import Link from "next/link";
import { prefixer, getData } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import { withRouter } from 'next/router';
import TourSidebar from '../components/TourSidebar';

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
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.rendered
                                  }} />
                              </a>
                            </Link>
                          </h2>
                          <LIST>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.acf.intro_text
                              }} />
                          </LIST>
                          <div className="post-meta">
                            <Link href={prefixer(`/tour-more/${post.slug}`)}>
                              <a>
                                <p>From: {post.acf.price}</p></a>
                            </Link>
                            <Link href={prefixer(`/tour-more/${post.slug}`)}>
                              <a>Group size: {post.acf.group_size}</a>
                            </Link>
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
            bgImg={prefixer('/images/Glacier1.jpg')}
            title={title}
            content={'BlueWolf Travel - the team of local travel experts organizing discovery & adventure oriented tours for groups, incentives and  individuals. '}
          />
          <PageWrapper classes="post-page-content-area sp-y">
            {this.renderContent()}

            <TourSidebar />
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default withRouter(Category);