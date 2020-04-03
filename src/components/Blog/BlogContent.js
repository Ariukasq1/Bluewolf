import React, { Component, Fragment } from 'react';
import BlogItem from "./BlogItem";
import BlogItemList from "./BlogItemList";
import Pagination from "../Pagination";
import Config from "../../config";
import axios from 'axios';
import moment from "moment";
import { getData } from '../../utils';

class BlogContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 1,
      perPage: 6
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=blog`)
      .then(res => {
        const categories = res.data;
        const perPage = this.props.perPage || 6;

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
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.perPage;
    const indexOfFirstPost = indexOfLastPost - this.state.perPage;
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = currentPage => this.setState({
      currentPage: currentPage
    });
    return (
      <div className={this.props.cols + ' ' + this.props.classes}>
        <Fragment>
          <div className={`blog-content-wrapper ${this.props.blog_type === 'list' && 'blog-list'}`}>
            <div className="row mtn-30">
              {
                this.props.blog_type === 'list' ? (
                  <div className={'col-12'}>
                    {
                      currentPosts.map(post => (
                        <BlogItemList
                          key={post.id}
                          id={post.slug}
                          thumb={getData(post._embedded, 'image')}
                          title={post.title}
                          excerpt={post.excerpt}
                          postBy={getData(post._embedded, 'author').name}
                          date={moment(post.date).format('ll')}
                        />
                      ))
                    }
                  </div>
                ) : (
                    currentPosts.map(post => (
                      <BlogItem
                        key={post.id}
                        id={post.slug}
                        cols={this.props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
                        thumb={getData(post._embedded, 'image')}
                        title={post.title}
                        excerpt={post.excerpt}
                        postBy={getData(post._embedded, 'author').name}
                        date={moment(post.date).format('ll')}
                      />
                    ))
                  )
              }
            </div>
          </div>

          <Pagination
            perPage={this.state.perPage}
            totalPosts={this.state.posts.length}
            paginate={paginate}
            currentPage={this.state.currentPage}
          />
        </Fragment>
      </div>
    );
  }
}

export default BlogContent;