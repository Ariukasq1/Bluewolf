import React from 'react';
import Link from "next/link";
import { prefixer } from '../utils';

const FeaturedBlog = ({ title, thumb, publishDate, id }) => {
  const blogURL = `blog/${title.split(' ').join('-').toLocaleLowerCase()}?id=${id}`;
  return (
    <div className="single-blog-item">
      <div className="post-thumb">
        <Link href={prefixer('/' + blogURL)}><img src={prefixer('/img/' + thumb)} alt={title} /></Link>
      </div>

      <div className="post-info">
        <h6><Link href={prefixer('/' + blogURL)}>{title}</Link></h6>
        <span className="post-date"><i className="fa fa-clock-o" />  {publishDate}</span>
      </div>
    </div>
  );
};

export default FeaturedBlog;