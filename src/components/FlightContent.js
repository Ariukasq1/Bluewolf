import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import List from '../UI/List';
import LI from '../UI/List/Item';
import { prefixer } from '../utils';
import Link from "next/link";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class FlightContent extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('flight')
      .embed();

    if (categories.length > 0) {
      const posts = await wp
        .posts()
        .category(categories[0].id)
        .perPage(3)
        .embed();
      return { categories, posts };
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="flight-plan-area sm-top">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <SectionTitle
                title="Flighting Plan"
                heading="Our Best <br>Domestic Flights"
              />
            </div>
          </div>

          <div className="row mtn-30">
            {
              posts.map(post => (
                <div key={post.slug} className='col-md-6 col-lg-4'>
                  <div className="flight-plan-item">
                    <div className="flight-plan-header">

                      <Link href={prefixer('/posts/' + post.slug)}>
                        <a>
                          <h6 className="plan-name">
                            {post.acf.flight_number}</h6>
                        </a>
                      </Link>
                      <div className="plan-main">
                        <span className="img">
                          <Link href={prefixer('/posts/' + post.slug)}>
                            <a>
                              {console.log(post.acf.logo)}
                              {post.acf.logo && <img src={post.acf.logo} alt={post.title} />}
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="flight-plan-body">
                      <List classes="price-list">
                        <LI>Departure: {post.acf.departure}</LI>
                        <LI>Flight duration: {post.acf.flight_duration}</LI>
                        <LI>Avg.One way: {post.acf.avgone_way}</LI>
                        <LI>Avg.Two way: {post.acf.avgtwo_way}</LI>
                      </List>
                    </div>
                    <div className="flight-plan-footer">
                      <a href="/" className="btn-outline">see more</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  };
}

export default FlightContent;