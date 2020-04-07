import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import BlueWolfBook from "../components/BlueWolfBook";
import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import { Accordion, Card, Button } from 'react-bootstrap';
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer } from "../utils"
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Faq extends React.Component {

  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('faq')
      .embed();

    if (categories.length > 0) {
      const posts = await wp
        .posts()
        .category(categories[0].id)
        .perPage(20)
        .embed();

      return { categories, posts };
    }

    return { categories };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <Layout>
          <PageHeader
            bgImg={prefixer('/images' + defaultCoverImage)}
            title={'FAQ'}
            content={'text'}
          />
          <div className="faq-area sm-top">
            <div className="container">
              <div className="row">
                <div className="col-12" >
                  <div className="row mtn-30">
                    <div className='faq-list'>
                      <Accordion defaultActiveKey="0">
                        {
                          posts.map((post, index) => (
                            <Card key={post.slug} >
                              <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                  <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey={index}>
                                <Card.Body>
                                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          ))
                        }
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BrandLogo />
          <BlueWolfBook classes="sp-top" />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  };
}

export default Faq;