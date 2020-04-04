import React from 'react';
import BlogContent from "./BlogContent";
import PageHeader from "../PageHeader";
import SidebarList from './SidebarList';
import PageWrapper from "../PageWrapper";
import { prefixer } from '../../utils';

const BlogTemplate = ({ sidebar_position, blog_type, sidebar }) => {

  return (
    <>
      <PageHeader
        bgImg={prefixer('/images/default.jpg')}
        title={'Blog'}
        content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
      />
      <PageWrapper classes={'blog-page-content-area sp-y'}>
        {sidebar === true && sidebar_position === 'left' ? <SidebarList perPage={4} classes={'order-1 order-lg-0'} /> : null}

        <BlogContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1' : null} />

        {sidebar === true && sidebar_position === 'right' ? <SidebarList perPage={4} /> : null}
      </PageWrapper>
    </>
  );
}

export default BlogTemplate;
