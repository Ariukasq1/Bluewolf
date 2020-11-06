import React from 'react';
import List from '../../UI/List';
import LI from '../../UI/List/Item';
import { prefixer } from '../../utils';
import Link from "next/link";

function TourItem(props) {

  return (
    <div key={props.price} className="col-md-6 col-lg-4">
      <div className="service-item">
        <figure className="service-thumb">
          {props.discount ? <span className="discount">{props.discount} </span> : ''}
          <Link href={prefixer(`/tour-more/${props.slug}`)}>
            <a>
              <img src={props.thumb} alt={props.title} />
            </a>
          </Link>
          <h4>{props.price}</h4>
          <figcaption className="service-txt">
            <h5>
              <div className='nowrap-text'
                dangerouslySetInnerHTML={{
                  __html: props.title
                }}
              />
            </h5>
          </figcaption>
        </figure>

        <div className="service-content">
          <div className="service-content-inner">
            <h5>
              <Link href={prefixer(`/tour-more/${props.slug}`)}>
                <a className="stretched-link">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.title
                    }}
                  />
                </a>
              </Link>
            </h5>
            <List classes="price-list">
              <LI>Price: {props.price}</LI>
              <LI>Theme: {props.theme}</LI>
              <LI>Duration: {props.duration}</LI>
              <LI>Group size: {props.groupSize}</LI>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourItem;