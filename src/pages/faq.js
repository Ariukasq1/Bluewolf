import React from 'react';
import Layout from "../components/Layout";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import MobileMenu from "../components/MobileMenu";
import { Accordion, Card, Button } from 'react-bootstrap';
import SectionTitle from '../UI/SectionTitle'
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

class Faq extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('faq')
      .perPage(40)
      .embed();

    if (categories.length > 0) {
      const posts = await wp
        .posts()
        .category(categories[0].id)
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
          <div className="flight-plan-area sm-top">
            <div className="container">
              <div className="row">
                <div className="col-12" >
                  <SectionTitle
                    heading="FAQ"
                  />
                </div>
              </div>

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
                            <Card.Body><div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /></Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))
                    }
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <BrandLogo />
          <Funfact classes="sp-top" />
          <CallToAction />
        </Layout>
        <MobileMenu />
      </>
    );
  };
}

export default Faq;