import React from 'react';
import WPAPI from "wpapi";
import Layout from "../components/Layout";
import Slider from '../components/Slider';
import Festival from '../components/Festival';
import Features from '../components/Features';
import TourHome from '../components/Tour/TourHome';
import Testimonials from "../components/Testimonials";
import BlogPageContent from "../components/Blog";
import BrandLogo from "../components/BrandLogo";
import BlueWolfBook from "../components/BlueWolfBook";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import Destination from '../components/Destination';
import Config from "../config";

class Home extends React.Component {

  static async getInitialProps(context) {

    const wp = new WPAPI({ endpoint: Config().apiUrl });
    const sliderCategory = await wp
      .categories()
      .slug("sliders")
      .embed()
      .then((data) => {
        return data[0];
      });

    if (sliderCategory) {
      let sliders = await wp.posts().categories(sliderCategory.id).perPage(40).embed();
      return {
        sliders,
        sliderCategory
      };
    }

    return {
      sliderCategory
    };
  }

  render() {
    const { sliders } = this.props;
    return (
      <>
        <Layout title="Bluewolf">
          <Slider sliders={sliders}/>
          <Festival />
          <Features />
          <TourHome perPage={6} />
          <Testimonials />
          <Destination />
          <BlogPageContent perPage={3} />
          <BrandLogo />
          <BlueWolfBook />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  }
}

export default Home;
