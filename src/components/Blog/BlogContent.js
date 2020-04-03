import React from 'react';
import moment from "moment";
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
        <div className='col-lg-9 null'>
          <div className='blog-content-wrapper false'>
            <div className="row mtn-30">
              {posts.map(post => (
                <div key={post.slug} className='col-md-6'>
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
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                              }}
                            />
                          </a>
                        </Link>
                      </h2>
                      <div
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
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;