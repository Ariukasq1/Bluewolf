import React from 'react';
import Link from "next/link";

export default function FeaturedBlog(props) {

  return (
    <div className="single-blog-item">
      <div className="post-thumb">
        <Link href={`/blog-more/${props.id}`}>
          <a>
            <img src={props.thumb} alt={props.title} />
          </a>
        </Link>
      </div>

      <div className="post-info">
        <h6><Link href={`/blog-more/${props.id}`}>
          <a>
            <div
              dangerouslySetInnerHTML={{
                __html: props.title.rendered
              }}
            />
          </a>
        </Link></h6>
        <span className="post-date">
          <i className="fa fa-clock-o" />
          {props.date}
        </span>
      </div>
    </div>
  );
}

