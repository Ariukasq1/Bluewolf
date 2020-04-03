import React from 'react';
import Config from "../../config";
import axios from 'axios';
import SectionTitle from "../../UI/SectionTitle";
import BlogItem from './BlogItem';
import moment from "moment";
import { getData } from '../../utils';

class BlogContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=blog`)
      .then(res => {
        const categories = res.data;
        const perPage = this.props.perPage || 20;

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
      <>
        <div className="blog-area-wrapper sm-top">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <SectionTitle title="OUR BLOG" heading="Latest update <br> from our blog post" />
              </div>
            </div>

            <div className="row mtn-35">
              {
                posts.map(post => (
                  <BlogItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    postBy={getData(post._embedded, 'author').name}
                    date={moment(post.date).format('ll')}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlogContent;