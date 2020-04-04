import React from 'react';
import Link from "next/link";
import { prefixer } from '../utils';

export default function DestinationSidebar(props) {

  return (
    <>
      <div key={props.id} className="destination-item">
        <figure className="tours-pic">
          <Link href={`${prefixer('/tour-category/' + props.id)}`}>
            <a>
              <img src={props.slider_image} alt={props.title} />
            </a>
          </Link>
        </figure>
        <div className="tours-info">
          <h5>
            <Link href={`${prefixer('/tour-category/' + props.id)}`} className="stretched-link"><a>{props.title}</a>
            </Link>
          </h5>
        </div>
      </div>
    </>
  )
}