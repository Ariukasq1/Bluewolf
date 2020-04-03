import React from 'react';
import Layout from "../components/Layout";
import BlogTemplate from "../components/Blog/BlogTemplate";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";

export default function BlogPage() {
  return (
    <>
      <Layout title='Blog'>
        <BlogTemplate blog_type={'grid'} sidebar={true} sidebar_position={'right'} />
        <CallToAction />
      </Layout>
      <MobileMenu />
    </>
  );
}
