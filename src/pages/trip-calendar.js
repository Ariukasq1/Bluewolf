import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import {prefixer} from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import {withRouter} from 'next/router';
import BlueWolfBook from '../components/BlueWolfBook';
import Layout from '../components/Layout';

const wp = new WPAPI({endpoint: Config().apiUrl});

class Category extends React.Component {
  static async getInitialProps() {
    let apiMethod = wp.pages();

    const posts = await wp
      .posts()
      .categories(14)
      .embed();

    const page = await apiMethod
      .slug('trip-calendar')
      .embed()
      .then(data => {
        return data[0];
      });

    return {posts,page};
  }

  renderContent() {
    const {posts,page} = this.props;

    if(posts.length === 0) {
      return (
        <div className="empty-state">
          <h3>Sorry</h3>
          <p>There are no post in this category yet.</p>
        </div>
      )
    }

    return (
      <div className='post-content-wrapper false'>
        <div className="section-title"><h2>{page.title.rendered}</h2></div>
        <table className="table table-striped calendar-table table-borderless">
          <thead>
            <tr>
              <th>Date</th>
              <th>Tour</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Tour info</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.acf.tour_start_date} - {post.acf.tour_end_date}</td>
                  <td>
                    <Link href={prefixer(`/tour-more/${post.slug}`)}>
                      <a>
                        <div className="nowrap-text"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered
                          }} />
                      </a>
                    </Link>
                  </td>
                  <td>{post.acf.duration}</td>
                  <td>{post.acf.status}</td>
                  <td>
                    <Link href={prefixer(`/tour-more/${post.slug}`)}>
                      <a>View tour</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <>
        <Layout title="Trip Calendar">
          <PageHeader
            bgImg={prefixer('/images/BGoat.jpg')}
            title={`Trip Calendar`}
          />
          <PageWrapper classes="post-page-content-area sp-y">
            <div className="col-lg-12 null">

              {this.renderContent()}
            </div>
          </PageWrapper>
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default withRouter(Category);