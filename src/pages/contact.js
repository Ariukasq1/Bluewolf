import React from 'react';
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Head from 'next/head';

export default function Contact() {

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.erxesSettings = {
            forms: [{
              brand_id: "Nsc5xA",
              form_id: "jQ9v7B",
            }],
          };
          
        (function() {
          var script = document.createElement('script');
          script.src = "https://bluewolf.app.erxes.io/widgets/build/formWidget.bundle.js";
          script.async = true;
        
          var entry = document.getElementsByTagName('script')[0];
          entry.parentNode.insertBefore(script, entry);
        })();` }} />
      </Head>
      <Layout>
        <div className={'contact-page-area-wrapper sp-y'}>
          <div className="container">
            <div className="contact-content-wrap">
              <div className="row">
                <div className="col-lg-8">
                  <div className="contact-form-area contact-method">
                    <h3>Blue Wolf Email Send</h3>
                    <div data-erxes-embed='jQ9v7B' style={{ width: '500px', height: '300px' }}>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="contact-information contact-method">
                    <div className="contact-info-con">
                      <h3>Contact Info</h3>
                      <div className="widget-item m-0">
                        <li>{'(+976) 99110303'}</li>
                        <li>{'info@bluewolftravel.com'}</li>
                      </div>
                      <div className="member-social-icons mt-30">
                        <a href={`https://www.facebook.com/bluewolftravelcom/`} target="_blank" rel="noopener noreferrer">
                          <i className={`fa fa-facebook`} />
                        </a>
                        <a href={`https://twitter.com/bluewolftravel`} target="_blank" rel="noopener noreferrer">
                          <i className={`fa fa-twitter`} />
                        </a>
                        <a href={`skype:bluewolftravel1?call`} target="_blank" rel="noopener noreferrer">
                          <i className={`fa fa-skype`} />
                        </a>
                        <a href={`https://www.instagram.com/chiryazdan/`} target="_blank" rel="noopener noreferrer">
                          <i className={`fa fa-instagram`} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout >
      <MobileMenu />
    </>
  );
}