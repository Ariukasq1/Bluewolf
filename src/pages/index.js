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
import Destination from '../components/Destination';

export default function Home() {
  return (
    <>
      <Layout title="Bluewolf">
        <Slider />
        {/* <About category={post.categories[55]} /> */}
        <Features />
        {/* <Services classes="sm-top-wt" /> */}
        <Testimonials />
        <Destination />
        {/* <Blog posts={this.props.posts} /> */}
        <BrandLogo />
        <Funfact />
        <CallToAction />
      </Layout>
      <MobileMenu />
    </>
  );
}