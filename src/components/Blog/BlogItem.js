import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils';

export default function BlogItem(props) {

  return (
    <>
      <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
        <div className="blog-item">
          {
            props.thumb ? (
              <figure className="blog-thumb">
                <Link href={prefixer(`/blog-more/${props.id}`)}>
                  <a>
                    <img src={props.thumb} alt={props.title} />
                  </a>
                </Link>
              </figure>
            ) : null
          }
          <div className="blog-content">
            <h2 className="h6">
              <Link href={prefixer(`/blog-more/${props.id}`)}>
                <a>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.title.rendered
                    }}
                  />
                </a>
              </Link>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: props.excerpt.rendered
              }}
            />
            <div className="blog-meta">
              <Link href={prefixer(`/blog-more/${props.id}`)}>
                <a>
                  By: {props.postBy}
                </a>
              </Link>
              <Link href={prefixer(`/blog-more/${props.id}`)}>
                <a>
                  {props.date}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
