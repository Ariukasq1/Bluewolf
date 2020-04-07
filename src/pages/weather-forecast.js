import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import BlueWolfBook from "../components/BlueWolfBook";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import { prefixer } from "../utils";

export default function WeatherForesat() {

  return (
    <>
      <Layout>
        <PageHeader
          bgImg={prefixer('/images/default.jpg')}
          title={'Weather Forecast'}
          content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
        />

        <PageWrapper classes="sm-top service-details-wrapper">
          <p>Weather Forecast</p>
        </PageWrapper>
        <CallToAction />
      </Layout >
      <MobileMenu />
    </>
  );
}