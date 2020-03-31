import React from 'react';
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import FeaturedBlog from "../FeaturedBlog";
import Newsletter from "../Newsletter";
import Blogs from "../../data/Blog/blog";
import { prefixer } from '../../utils';

const SidebarForBlog = () => {
  return (
    <Sidebar classes={`col-lg-3`}>
      <SidebarItem classes={'single-sidebar-item-wrap'}>
        <img src={prefixer('/img/banner-poster.jpg')} alt="Banner" />
      </SidebarItem>

      <SidebarItem title={'FEATURED POSTS'} classes={'single-sidebar-item-wrap'}>
        <div className={'latest-blog-widget'}>
          {
            Blogs.reverse().slice(0, 4).map(post => (
              <FeaturedBlog key={post.id} id={post.id} title={post.title} publishDate={post.publishDate} thumb={post.thumb} />
            ))
          }
        </div>
      </SidebarItem>

      <SidebarItem classes={'single-sidebar-item-wrap'}>
        <Newsletter />
      </SidebarItem>

    </Sidebar>
  );
};

export default SidebarForBlog;