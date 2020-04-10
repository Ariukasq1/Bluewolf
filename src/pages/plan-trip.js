import React from 'react';
import Layout from "../components/Layout";
import BlueWolfBook from "../components/BlueWolfBook";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import { defaultCoverImage } from "../components/layouts/constants";
import List from '../UI/List';
import Link from 'next/link';
import { prefixer } from '../utils';
import Head from 'next/head';

export default function PlanTrip() {

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.erxesSettings = {
              forms: [{
                brand_id: "Nsc5xA",
                form_id: "ouGSda",
              }],
            };
            
          (function() {
            var script = document.createElement('script');
            script.src = "https://bluewolf.app.erxes.io/widgets/build/formWidget.bundle.js";
            script.async = true;
          
            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
          })();` }} />
      </Head>
      <Layout>
        <PageHeader
          bgImg={prefixer('/images' + defaultCoverImage)}
          title={'Plan your trip'}
          content={''}
        />
        <PageWrapper classes="sm-top service-details-wrapper">
          <div className='col-lg-9'>
            <div className="service-details-content">
              <div data-erxes-embed='ouGSda' style={{ width: '840px', height: '2040px' }}>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <List classes="service-list">
              <h2 className='h4'>Services</h2>
              <hr></hr>
              <div className="destination-item">
                <figure className="link-pic">
                  <Link href={`${prefixer('/car-rental')}`}>
                    <a>
                      <img src={prefixer('/images/car-rental/Hyundai.jpg')} alt='Hyundai' />
                    </a>
                  </Link>
                </figure>
                <div className="tours-info">
                  <h5>
                    <Link href={`${prefixer('/car-rental')}`} >
                      <a>Car Rental</a>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="destination-item">
                <figure className="link-pic">
                  <Link href={`${prefixer('/tour-category/mongolia')}`}>
                    <a>
                      <img src={prefixer('/images/AltaiNomads.jpg')} alt='Mongolia' />
                    </a>
                  </Link>
                </figure>
                <div className="tours-info">
                  <h5>
                    <Link href={`${prefixer('/tour-category/mongolia')}`} >
                      <a>Mongolia</a>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="destination-item">
                <figure className="link-pic">
                  <Link href={`${prefixer('/tour-category/kazakhstan')}`}>
                    <a>
                      <img src={prefixer('/images/Белуха.jpg')} alt='Mongolia' />
                    </a>
                  </Link>
                </figure>
                <div className="tours-info">
                  <h5>
                    <Link href={`${prefixer('/tour-category/kazakhstan')}`} >
                      <a>Kazakhstan</a>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="destination-item">
                <figure className="link-pic">
                  <Link href={`${prefixer('/tour-category/russian-altai')}`}>
                    <a>
                      <img src={prefixer('/images/KhanTengri.jpg')} alt='Mongolia' />
                    </a>
                  </Link>
                </figure>
                <div className="tours-info">
                  <h5>
                    <Link href={`${prefixer('/tour-category/russian-altai')}`} >
                      <a>Russian Altai</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </List>
          </div>
        </PageWrapper>
        <BlueWolfBook />
        <CallToAction />
      </Layout >
      <MobileMenu />
    </>
  );
}