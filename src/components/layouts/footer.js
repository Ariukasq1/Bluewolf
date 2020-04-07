import React from 'react';
import Widget from "../../UI/Widget";
import List from "../../UI/List";
import LI from "../../UI/List/Item";
import Link from "next/link";
import { prefixer } from "../../utils";

function Footer() {
  return (
    <footer className="footer-area sp-bottom">
      <div className="container">
        <div className="row mtn-40">
          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Information">
              <List classes="widget-list">
                <LI><Link href={prefixer('/tours')}>Trips</Link></LI>
                <LI><Link href={prefixer('/accomodation')}>Accomondation</Link></LI>
                <LI><Link href={prefixer('/car-rental')}>Transfort</Link></LI>
                <LI><Link href={prefixer('/plan-trip')}>Travel Tools</Link></LI>
                <LI><Link href={prefixer('/blog')}>Blog</Link></LI>
                <LI><Link href={prefixer('/who-we-are')}>About Us</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Social Links">
              <List classes="widget-list">
                <LI><a href="https://www.facebook.com/bluewolftravelcom/" target="_blank">Facebook</a></LI>
                <LI><a href="https://twitter.com/bluewolftravel" target="_blank">Twitter</a></LI>
                <LI><a href="skype:bluewolftravel1?call" target="_blank">Skype</a></LI>
                <LI><a href="https://www.instagram.com/chiryazdan/" target="_blank">Instagram</a></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Our Tours">
              <List classes="widget-list">
                <LI><Link href={prefixer('/tour-category/mongolia')}>Mongolia</Link></LI>
                <LI><Link href={prefixer('/tour-category/kazakhstan')}>Kazakhstan</Link></LI>
                <LI><Link href={prefixer('/tour-category/russian-altai')}>Russian Altai</Link></LI>
                <LI><Link href={prefixer('/')}>China</Link></LI>
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-3">
            <Widget title="Contact Us">
              <address>
                Phone: (+976) 99110303 <br />
                Email: info@bluewolftravel.com <br />
              </address>
            </Widget>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;