import React from 'react';
import WPAPI from "wpapi";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import BlueWolfBook from "../components/BlueWolfBook";
import BrandLogo from "../components/BrandLogo";
import Destination from '../components/Destination';
import PageHeader from "../components/PageHeader";
import { prefixer } from '../utils';
import Config from "../config";

class Tours extends React.Component {
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
    const { sliders, sliderCategory } = this.props;
    return (
      <>
        <Layout>
          <PageHeader
            bgImg={prefixer('/images/default.jpg')}
            title={'Destinations'}
            content={''}
          />
          <Destination sliderCategory={sliderCategory} sliders={sliders} />
          <BrandLogo />
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}

export default Tours;