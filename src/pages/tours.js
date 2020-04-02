import React from 'react';
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Destination from '../components/Destination';

export default function Tours() {
  return (
    <>
      <Layout>
        <Destination />
        <CallToAction />
      </Layout >
      <MobileMenu />
    </>
  );
}
