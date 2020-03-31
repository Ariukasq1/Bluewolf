import React from 'react';
import Widget from "../../UI/Widget";
import List from "../../UI/List";
import LI from "../../UI/List/Item";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-area sp-bottom">
      <div className="container">
        <div className="row mtn-40">
          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Information">
              <List classes="widget-list">
                <LI><Link href={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Social Links">
              <List classes="widget-list">
                <LI><Link href="https://facebook.com/hasthemes/">
                  <a target="_blank">Facebook</a></Link></LI>
                <LI><Link href="https://twitter.com/hasthemes/"><a target="_blank">Twitter</a></Link></LI>
                <LI><Link href="https://dribbble.com/hastech/"><a target="_blank">Dribbble</a></Link></LI>
                <LI><Link href="https://www.instagram.com/"><a target="_blank">Instagram</a></Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Our Tours">
              <List classes="widget-list">
                <LI><Link href={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                <LI><Link href={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-3">
            <Widget title="Contact Us">
              <address>
                2005 Stokes Isle Apartment. 896, Washington 10010, USA <br />
                https://example.com <br />
                (+68) 120034509
                            </address>
            </Widget>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;