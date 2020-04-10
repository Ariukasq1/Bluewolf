import React from 'react';
import Link from "next/link";
import List from '../UI/List';

import { prefixer } from '../utils';

export default function DestinationSidebar(props) {

  return (
    <>
      <div className='col-lg-3'>
        <List classes="service-list">
          <h2 className='h4'>Destinations</h2>
          <hr></hr>
          <div className="destination-item">
            <figure className="link-pic">
              <Link href={`${prefixer('/tour-category/mongolia')}`}>
                <a>
                  <img src={prefixer('/images/AltaiNomads.jpg')} alt='Mongolia' />
                </a>
              </Link>
            </figure>
            <div className="tours-info">
              <h5>
                <Link href={`${prefixer('/tour-category/mongolia')}`} >
                  <a>Mongolia</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="destination-item">
            <figure className="link-pic">
              <Link href={`${prefixer('/tour-category/kazakhstan')}`}>
                <a>
                  <img src={prefixer('/images/Белуха.jpg')} alt='Mongolia' />
                </a>
              </Link>
            </figure>
            <div className="tours-info">
              <h5>
                <Link href={`${prefixer('/tour-category/kazakhstan')}`} >
                  <a>Kazakhstan</a>
                </Link>
              </h5>
            </div>
          </div>
          <div className="destination-item">
            <figure className="link-pic">
              <Link href={`${prefixer('/tour-category/russian-altai')}`}>
                <a>
                  <img src={prefixer('/images/KhanTengri.jpg')} alt='Mongolia' />
                </a>
              </Link>
            </figure>
            <div className="tours-info">
              <h5>
                <Link href={`${prefixer('/tour-category/russian-altai')}`} >
                  <a>Russian Altai</a>
                </Link>
              </h5>
            </div>
          </div>
        </List>
      </div>
    </>
  )
}