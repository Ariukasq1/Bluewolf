import React from 'react';
import SectionTitle from "../../UI/SectionTitle";
import Config from "../../config";
import axios from 'axios';
import TourItem from './TourItem';
import {getData} from '../../utils';

export default class RelatedTours extends React.Component {
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
        const perPage = this.props.perPage || 6;

        if(categories && categories.length > 0) {
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
    const {posts} = this.state;
    return (
      <div className="related-service-area sm-top-wt">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <SectionTitle
                heading="Related Tours"
              />
            </div>
          </div>

          <div className="row mtn-30">
            {
              posts.map(post => (
                <TourItem
                  key={post.slug}
                  id={post.slug}
                  slug={post.slug}
                  title={post.title.rendered}
                  discount={post.acf.discount}
                  price={post.acf.price}
                  theme={post.acf.theme}
                  duration={post.acf.duration}
                  groupSize={post.acf.group_size}
                  thumb={getData(post._embedded,'image')}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

