import React from 'react';
import parse from 'html-react-parser';
import Thumbnail from "../../UI/Thumbnail";
import Content from "../../UI/Content";
import { prefixer } from '../../utils';
import Link from "next/link";
import aboutData from '../../data/About/home-one'

const About = () => {
  return (
    <div className="about-area-wrapper sm-top">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-6 col-lg-5">
            <Thumbnail classes="about-thumb" imgSrc={prefixer('/images/tour_cat_images' + aboutData.thumb)} />
          </div>

          <div className="col-md-6 col-lg-7">
            <Content classes="about-content">
              <h6>{aboutData.title}</h6>
              <h2>{parse(aboutData.heading)}</h2>
              <span className="about-since">{aboutData.since}</span>
              <p>{parse(aboutData.text)}</p>
              <Link href={`${prefixer(aboutData.btnLink)}`}>
                <a className="btn-about">
                  {aboutData.btnText} <i className="fa fa-angle-double-right" />
                </a>
              </Link>
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;