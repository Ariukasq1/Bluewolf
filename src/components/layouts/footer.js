import React from 'react';
import Widget from "../../UI/Widget";
import List from "../../UI/List";
import LI from "../../UI/List/Item";
import Link from "next/link";
import { prefixer } from "../../utils";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  SkypeIcon,
  InstagramIcon
} from "react-share";

function Footer() {
  return (
    <footer className="footer-area sp-bottom">
      <div className="container">
        <div className="row mtn-40">
          <div className="col-md-4 col-lg-3">
            <Widget title="Our accreditations">
              <List classes="widget-list">
                <LI>
                  <a href='https://www.adventuretravel.biz/'>
                    <img src={prefixer('/images/at.png')} alt='footer-at' className='li-right' />
                  </a>
                  <a href="https://www.pata.org/">
                    <img src={prefixer('/images/pata.jpg')} alt='footer-data' className='li-right' />
                  </a>
                </LI>
                <LI>
                  <a href="https://www.cbi.eu/">
                    <img src={prefixer('/images/cbi.png')} alt='footer-cbi' />
                  </a>
                </LI>
              </List>
            </Widget>
          </div>
          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Information">
              <List classes="widget-list">
                <LI><Link href={prefixer('/tour-category/mongolia')}>Mongolia</Link></LI>
                <LI><Link href={prefixer('/tour-category/kazakhstan')}>Kazakhstan</Link></LI>
                <LI><Link href={prefixer('/tour-category/russian-altai')}>Russian Altai</Link></LI>
                <LI><Link href={prefixer('/accomodation')}>Accomondation</Link></LI>
                <LI><Link href={prefixer('/car-rental')}>Car Rental</Link></LI>
                <LI><Link href={prefixer('/flight')}>Domestic Flights</Link></LI>
                <LI><Link href={prefixer('/blog')}>Blog</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Travel Tools">
              <List classes="widget-list">
                <LI><Link href={prefixer('/plan-trip')}>Plan Your Trip</Link></LI>
                <LI><Link href={prefixer('/faq')}>FAQ</Link></LI>
                <LI><Link href={prefixer('/what-to-pack')}>What To Pack</Link></LI>
                <LI><Link href={prefixer('/travel-insurance')}>Travel Insurance</Link></LI>
                <LI><Link href={prefixer('/weather-forecast')}>Weather Forecast</Link></LI>
                <LI><Link href={prefixer('/brochures')}>Brochures</Link></LI>
                <LI><Link href={prefixer('/booking-form')}>Booking Form</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="About Us">
              <List classes="widget-list">
                <LI><Link href={prefixer('/terms-conditions')}>Terms And Conditions</Link></LI>
                <LI><Link href={prefixer('/who-we-are')}>Why Travel With BWT?</Link></LI>
                <LI><Link href={prefixer('/golden-eagle')}>Golden Eagle</Link></LI>
                <LI><Link href={prefixer('/cbt-responsible-tourism')}>CBT Responsible Tourism</Link></LI>
              </List>
            </Widget>
          </div>
          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Contact Us">
              <address>
                <i className='fa fa-phone' /> (+976) 99110303 <br />
              </address>
              <div className='social'>
                <List classes="widget-list">
                  <LI>
                    <a href="info@bluewolftravel.com">
                      <i className='fa fa-envelope-o' />
                    </a>
                    <a href='https://www.facebook.com/bluewolftravelcom/'>
                      <i className='fa fa-facebook' />
                    </a>
                    <a href="https://twitter.com/bluewolftravel">
                      <i className='fa fa-twitter' />
                    </a>
                    <a href="skype:bluewolftravel1?call">
                      <i className='fa fa-skype' />
                    </a>
                    <a href="https://www.instagram.com/chiryazdan/">
                      <i className='fa fa-instagram' />
                    </a>
                  </LI>
                </List>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;