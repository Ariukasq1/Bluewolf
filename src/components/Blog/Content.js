import React from 'react';
import moment from "moment";
import PageWrapper from "../PageWrapper";
import PageHeader from "../PageHeader";
import SidebarList from './SidebarList';
import Link from "next/link";
import { prefixer, getData } from '../../utils';
import Config from "../../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Content extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('blog')
      .embed();

    const posts = await wp
      .posts()
      .category(categories[0].id)
      .perPage(40)
      .embed();

    return { posts, categories };
  }


  render() {
    const { posts } = this.props;

    return (
      <>
        <PageHeader
          bgImg={prefixer('/images/ub_city.png')}
          title={'Blog'}
          content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
        />

        <PageWrapper classes={'blog-page-content-area sp-y'}>
          <div className='col-lg-9 null'>
            <div className='blog-content-wrapper false'>
              <div className="row mtn-30">
                {posts.map(post => {
                  return (
                    <div key={post.id} className='col-md-6'>
                      <div className="blog-item">
                        <figure className="blog-thumb">
                          <Link href={prefixer(`/blog-more/${post.slug}`)}>
                            <a>
                              <img src={getData(post._embedded, 'image')} alt={post.title} />
                            </a>
                          </Link>
                        </figure>
                        <div className="blog-content">
                          <h2 className="h6">
                            <Link href={prefixer(`/blog-more/${post.slug}`)}>
                              <a>
                                <div
                                  className={"post-content"}
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.rendered
                                  }}
                                />
                              </a>
                            </Link>
                          </h2>
                          <div
                            className={"post-content"}
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered
                            }}
                          />
                          <div className="blog-meta">
                            <Link href={prefixer(`/blog-more/${post.slug}`)}>
                              <a>
                                By: {getData(post._embedded, 'author').name}
                              </a>
                            </Link>
                            <Link href={prefixer(`/blog-more/${post.slug}`)}>
                              <a>
                                {moment(post.date).format('ll')}
                              </a>
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
          <SidebarList />
        </PageWrapper>
      </>
    );
  }
}

export default Content;