import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils';

const TripItemList = (props) => {
  const blogURL = `/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
  return (
    <div className="blog-item">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="blog-content">
            <h2 className="h5">
              <Link href={`${prefixer(blogURL)}`}>
                <a>
                  {props.title}
                </a>
              </Link>
            </h2>
            <p>{props.excerpt}</p>

            <div className="blog-meta">
              <Link href={`${prefixer(blogURL)}`}><a>By: {props.postBy}</a></Link>
              <Link href={`${prefixer(blogURL)}`}><a>{props.date}</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItemList;