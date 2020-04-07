import React from 'react';
import Layout from "../components/Layout";
import Slider from '../components/Slider';
import Festival from '../components/Festival';
import Features from '../components/Features';
import TourHome from '../components/TourHome';
import Testimonials from "../components/Testimonials";
import BlogPageContent from "../components/Blog";
import BrandLogo from "../components/BrandLogo";
import BlueWolfBook from "../components/BlueWolfBook";
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