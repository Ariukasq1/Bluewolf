import React from 'react';
import Link from 'next/link';
import { prefixer } from '../../utils';

function TripItem(props) {
  const aboutUsURL = `/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
  return (
    <React.Fragment>
      <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
        <div className="blog-item">
          <div className="blog-content">
            <h2 className="h5">
              <Link href={`${prefixer(aboutUsURL)}`}><a>{props.title}</a></Link>
            </h2>
            <p>{props.excerpt}</p>

            <div className="blog-meta">
              <Link href={`${prefixer(aboutUsURL)}`}><a>By: {props.postBy}</a></Link>
              <Link href={`${prefixer(aboutUsURL)}`}><a>{props.date}</a></Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TripItem;