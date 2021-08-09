import React from 'react';
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import PageHeader from "../components/PageHeader";
import PageWrapper from "../components/PageWrapper";
import List from '../UI/List';
import Link from "next/link";
import { prefixer, getData } from '../utils';
import Config from "../config";
import WPAPI from 'wpapi';
import { withRouter } from 'next/router';
import BrandLogo from '../components/BrandLogo';
import BlueWolfBook from '../components/BlueWolfBook';
import TourSidebar from '../components/Tour/TourSidebar';
import Layout from '../components/Layout';
import axios from "axios"
import TourCategory from '../components/TourCategory';
const wp = new WPAPI({ endpoint: Config().apiUrl });

class Category extends React.Component {
  static async getInitialProps(context) {
    const { slug, ids } = context.query;
    const subCats = await wp.categories().parent(14).perPage(40).embed();
    const categories = await wp
      .categories()
      .slug(slug)
      .perPage(40)
      .embed();

    if (categories.length > 0) {
      let posts = await wp
        .posts()
        .categories(categories[0].id)
        .embed();

      let subSub = await subCats.map(el => (wp.categories().parent(el.id).embed()))
      if (ids) {
        const categoryIds = ids.split(',').map(id => parseInt(id, 10));

        posts = posts.filter(post => {
          return categoryIds.every((categoryId) => post.categories.includes(categoryId));
        });
      }

      return { categories, posts, subCats, subSub };
    }

    return { categories, subCats };
  }

  render() {
    const { categories, subCats, subSub, posts } = this.props;

    if (categories.length === 0) return <Error statusCode={404} />;

    const title = categories[0].title;
    return (
      <>
        <Layout title={title}>
          <PageHeader
            bgImg={prefixer('/images/BGoat.jpg')}
            title={`Tours`}
            content={`Blue Wolf Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators.`}
          />
          <TourCategory posts={posts} subCategories={subCats} />
          <BrandLogo />
          <BlueWolfBook />
          <CallToAction />
        </Layout >
        <MobileMenu />
      </>
    );
  }
}


export default withRouter(Category);