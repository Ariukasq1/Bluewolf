import React from 'react';
import Layout from "../components/Layout";
import Slider from '../components/Slider';
import Festival from '../components/Festival';
import Features from '../components/Features';
import TourHome from '../components/TourHome';
import Testimonials from "../components/Testimonials";
import BlogPageContent from "../components/Blog";
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
        <Festival />
        <Features />
        <TourHome />
        <Testimonials />
        <Destination />
        <BlogPageContent perPage={3} />
        <BrandLogo />
        <Funfact />
        <CallToAction />
      </Layout>
      <MobileMenu />
    </>
  );
}