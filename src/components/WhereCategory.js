import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import List from "../UI/List";
import { prefixer } from '../utils';
import axios from 'axios';
import Link from "next/link";
import Loader from "./Loader";
import Config from "../config";

class WhereCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoaded: false
    };
  }


  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?parent=20`)
      .then(res => this.setState({
        categories: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { categories, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <SidebarItem title={'Where'} classes={'single-sidebar-item-wrap'}>
            <List classes={'sidebar-list'}>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <Link href={prefixer('/category/' + category.id)}>
                      <a> {category.name}</a>
                    </Link>
                  </li>
                ))
              }

            </List>
          </SidebarItem>
        </ >
      );
    }

    return (
      <ul className="cat-list" >
        <Loader />
      </ul>
    );
  }
};

export default WhereCategory;