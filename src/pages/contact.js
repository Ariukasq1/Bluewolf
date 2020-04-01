import React from 'react';
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Contact extends React.Component {
  static async getInitialProps() {
    let apiMethod = wp.pages();

    const page = await apiMethod
      .slug('contact')
      .embed()
      .then(data => {
        return data[0];
      });

    return { page };
  }

  render() {
    const { page } = this.props;

    if (!page.title) {
      return <Error statusCode={404} />;
    }

    return (
      <>
        <Layout>
          <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
              <div className="contact-content-wrap">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-form-area contact-method">
                      <h3>Send us a Message</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: page.content.rendered
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="contact-information contact-method">
                      <div className="contact-info-con">
                        <h3>Contact Info</h3>
                        <div className="widget-item m-0">
                          <li>{page.acf.phone}</li>
                          <li>{page.acf.email}</li>
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
  };
}

export default Contact;