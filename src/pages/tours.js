import React from 'react';
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import BlueWolfBook from "../components/BlueWolfBook";
import BrandLogo from "../components/BrandLogo";
import Destination from '../components/Destination';
import PageHeader from "../components/PageHeader";
import { prefixer } from '../utils';

export default function Tours() {
  return (
    <>
      <Layout>
        <PageHeader
          bgImg={prefixer('/images/default.jpg')}
          title={'Destinations'}
          content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
        />
        <Destination />
        <BrandLogo />
        <BlueWolfBook />
        <CallToAction />
      </Layout >
      <MobileMenu />
    </>
  );
}
