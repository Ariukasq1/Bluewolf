import React from 'react';
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Config from "../config";
import WPAPI from 'wpapi';
import Destination from '../components/Destination';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Tours extends React.Component {
  static async getInitialProps() {
    try {
      const posts = await wp
        .posts()
        .category([55])
        .perPage(40)
        .embed();

      return { posts }

    } catch (err) {
      return { hasError: true }
    }
  }
  render() {
    if (this.props.hasError) {
      return <ErrorPage statusCode={503} />;
    }

    return (
      <>
        <Layout>
          <Destination posts={this.props.posts} />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default Tours;