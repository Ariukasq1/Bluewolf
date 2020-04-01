import React from 'react';
import Layout from "../components/Layout";
import Content from "../components/Blog/Content";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import ErrorPage from 'next/error';
import WPAPI from 'wpapi'
import Config from "../config";

const wp = new WPAPI({ endpoint: Config().apiUrl });

class BlogPage extends React.Component {
  static async getInitialProps() {
    try {
      const posts = await wp
        .posts()
        .category([56])
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
        <Layout title='Blog | Bluewolf'>
          <Content posts={this.props.posts} />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  }
}

export default BlogPage;