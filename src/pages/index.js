import React from 'react';
import Layout from "../components/Layout";
import Slider from '../components/Slider';
// import About from '../components/About';
import Features from '../components/Features'
// import Services from '../components/TransfortContent'
import Testimonials from "../components/Testimonials";
// import Blog from "../components/Blog/Content";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import ErrorPage from 'next/error';
import WPAPI from 'wpapi'
import Config from "../config";
import Destination from '../components/Destination';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Home extends React.Component {
  // Resolve promise and set initial props.
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
        <Layout title="Bluewolf">
          <Slider posts={this.props.posts} />
          {/* <About /> */}
          <Features classes="sp-top" />
          {/* <Services classes="sm-top-wt" /> */}
          <Testimonials />
          <Destination posts={this.props.posts} />
          {/* <Blog posts={this.props.posts} /> */}
          <BrandLogo />
          <Funfact />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  }
}

export default Home;