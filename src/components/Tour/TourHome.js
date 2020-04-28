import React from 'react';
import SectionTitle from "../../UI/SectionTitle";
import { prefixer, getData } from '../../utils';
import axios from 'axios';
import Config from "../../config";
import TourItem from './TourItem';

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
                  <TourItem
                    key={post.id}
                    slug={post.slug}
                    title={post.title.rendered}
                    discount={post.acf.discount}
                    price={post.acf.price}
                    theme={post.acf.theme}
                    duration={post.acf.duration}
                    groupSize={post.acf.group_size}
                    thumb={getData(post._embedded, 'image')}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}