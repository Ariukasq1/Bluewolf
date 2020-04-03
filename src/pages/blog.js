import React from 'react';
import Layout from "../components/Layout";
import BlogContent from "../components/Blog/BlogContent";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import SidebarList from '../components/Blog/SidebarList';
import PageWrapper from "../components/PageWrapper";
import { prefixer } from '../utils';

export default function BlogPage() {
  return (
    <>
      <Layout title='Blog'>
        <PageHeader
          bgImg={prefixer('/images/ub_city.png')}
          title={'Blog'}
          content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
        />
        <PageWrapper classes={'blog-page-content-area sp-y'}>
          <BlogContent />
          <SidebarList />
        </PageWrapper>
        <CallToAction />
      </Layout>
      <MobileMenu />
    </>
  );
}
