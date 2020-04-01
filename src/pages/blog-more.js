import React, { Fragment } from 'react';
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Share from "../components/Share";
import Layout from '../components/Layout';
import Config from "../config";
import WPAPI from 'wpapi';
import { defaultCoverImage } from "../components/layouts/constants";
import { prefixer } from "../utils";
import SidebarList from '../components/Blog/SidebarList';

const wp = new WPAPI({ endpoint: Config().apiUrl });

export default class extends React.Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    let apiMethod = wp.posts();

    const post = await apiMethod
      .slug(slug)
      .embed()
      .then(data => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post } = this.props;

    if (!post.title) {
      return <Error statusCode={404} />;
    }

    let url = '';

    if (process.browser) {
      url = window.location.href
    }

    const { content, cover_image } = post.acf;

    return (
      <Fragment>
        <Layout>
          <PageHeader
            bgImg={cover_image ? cover_image : prefixer('/images' + defaultCoverImage)}
            title={<p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />}
            content={content ? content : ''}
          />

          <PageWrapper classes={'blog-details-page-content sp-y'}>
            <div className={'col-12'}>
              <article className="blog-post-details">
                <div className="blog-post-txt-wrap">
                  <div className="row">
                    <div className={`m-auto order-0 col-lg-9`}>
                      <div className="blog-post-txt">
                        <h2 className="h3"><p dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h2>

                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                      </div>

                      <Share title={post.title.rendered} path={url} />
                    </div>
                    <SidebarList />
                  </div>
                </div>
              </article>
            </div>
          </PageWrapper>
          <CallToAction />
        </Layout >
        <MobileMenu />
      </Fragment >
    );
  }
}

