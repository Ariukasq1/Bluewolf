import React from 'react';
import moment from "moment";
import PageWrapper from "../PageWrapper";
import SidebarList from './SidebarList';
import Link from "next/link";
import { prefixer, getData } from '../../utils';
import Config from "../../config";
import axios from 'axios';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=3`)
      .then(res => this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { posts } = this.state;

    return (
      <>
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