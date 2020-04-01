import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { prefixer } from '../utils';
import axios from 'axios';
import Link from "next/link";
import Loader from "./Loader";
import Config from "../config";

class AboutCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paegs: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/pages?parent=7`)
      .then(res => this.setState({
        pages: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { pages, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <SidebarItem title={'ABOUT US'} classes={'single-sidebar-item-wrap'}>
            <List classes={'sidebar-list'}>
              {
                pages.map(page => (
                  <LI key={page.id}>
                    <Link href={prefixer('/page/' + page.slug)}>
                      <a>
                        {page.title.rendered}
                      </a>
                    </Link>
                  </LI>
                ))
              }
            </List>
          </SidebarItem>
        </ >
      );
    }

    return (
      <List classes={'sidebar-list'}>
        <Loader />
      </List>
    );
  }
};

export default AboutCategories;