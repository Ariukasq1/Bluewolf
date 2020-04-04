import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils';

function CallToAction() {
  return (
    <div className="call-top-action-wrap sp-y sm-top">
      <div className="container">
        <div className="footer-top-content">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-6">
              <h2>Blue Wolf Travel</h2>
              <p>Blue Wolf Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators.</p>
            </div>
            <div className="col-md-4 col-lg-6 text-md-right mt-sm-25">
              <Link href={prefixer('/contact')} >
                <a className="btn-outline">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;