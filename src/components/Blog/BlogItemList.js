import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils';

const BlogItemList = (props) => {

  return (
    <div className="blog-item">
      <div className="row align-items-center">
        <div className="col-md-5">
          <figure className="blog-thumb">
            <Link href={prefixer(`/blog-more/${props.slug}`)}>
              <a>
                <img src={props.thumb} alt={props.title} />
              </a>
            </Link>
          </figure>
        </div>

        <div className="col-md-7">
          <div className="blog-content">
            <h2 className="h5"><Link href={prefixer(`/blog-more/${props.slug}`)}><a>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.title.rendered
                }}
              />
            </a></Link>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: props.excerpt.rendered
              }}
            />
            <div className="blog-meta">
              <Link href={prefixer(`/blog-more/${props.slug}`)}>
                <a>
                  By: {props.postBy}
                </a>
              </Link>
              <Link href={prefixer(`/blog-more/${props.slug}`)}>
                <a>
                  {props.date}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemList;