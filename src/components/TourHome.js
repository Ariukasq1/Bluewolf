import React from 'react';
import List from '../UI/List';
import LI from '../UI/List/Item';
import SectionTitle from "../UI/SectionTitle";
import { prefixer, getData } from '../utils';
import Link from "next/link";
import axios from 'axios';
import Config from "../config";

export default class TourHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=tours`)
      .then(res => {
        const categories = res.data;
        const perPage = this.props.perPage || 10;

        if (categories && categories.length > 0) {
          axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}&per_page=${perPage}`)
            .then(res => this.setState({
              posts: res.data
            }))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { posts } = this.state;

    return (
      <div className={`service-area-wrapper sm-top-wt`}>
        <div className="service-area-top" style={{ backgroundImage: `url("${prefixer('/images/ub_city.png')}")` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 m-auto text-center">
                <SectionTitle variant="light" title="Join Fixed Departures" heading="We travel delicious memory for every guest" />
              </div>
            </div>
          </div>
        </div>

        <div className="service-content-area">
          <div className="container">
            <div className="row mtn-30">
              {
                posts.map(post => (
                  <div key={post.slug} className="col-md-6 col-lg-4">
                    <div className="service-item">
                      <figure className="service-thumb">
                        <Link href={prefixer(`/tour-more/${post.slug}`)}>
                          <a>
                            <img src={getData(post._embedded, 'image')} alt={post.title} />
                          </a>
                        </Link>
                        <h4>{post.acf.price}</h4>
                        <figcaption className="service-txt">
                          <h5>
                            <div className='nowrap-text'
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                              }}
                            />
                          </h5>
                        </figcaption>
                      </figure>

                      <div className="service-content">
                        <div className="service-content-inner">
                          <h5>
                            <Link href={prefixer(`/tour-more/${post.slug}`)}>
                              <a className="stretched-link">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.rendered
                                  }}
                                />
                              </a>
                            </Link>
                          </h5>
                          <List classes="price-list">
                            <LI>Price: {post.acf.price}</LI>
                            <LI>Theme: {post.acf.theme}</LI>
                            <LI>Duration: {post.acf.duration}</LI>
                            <LI>Group size: {post.acf.group_size}</LI>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}