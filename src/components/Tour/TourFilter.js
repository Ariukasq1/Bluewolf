import React from 'react';
import SidebarItem from "../Sidebar/SidebarItem";
import List from "../../UI/List";
import axios from 'axios';
import Loader from "../Loader";
import { withRouter } from 'next/router';
import Config from "../../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({
  endpoint: Config().apiUrl,
});

class TourFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const { category } = this.props;
    // console.log(category, "tourFilter");
    // console.log(category.id, "TourFilterID");
    // wp.categories().parent(category.id).embed().then(res => console.log(res)).catch(err => console.log(err, "tourFilter"));
    // console.log(cat, "tourFilter");
    axios.get(`${Config().apiUrl}/wp/v2/categories?parent=` + category.id)
      .then(res => {
        console.log(res.data, "tourFilter");
        this.setState({
          categories: res.data,
          isLoaded: true
        })
      })
      .catch(err => console.log(err));
  };

  onChange = (e) => {
    const { checked } = e.target;
    const { router } = this.props;
    let catIds = [];

    const { slug, ids } = router.query;

    if (ids) {
      catIds = ids.split(',');
    }

    if (checked) {
      catIds.push(e.target.id);
    } else {
      catIds = catIds.filter(id => id !== e.target.id);
    }

    router.push({
      pathname: `${router.pathname}/${slug}`,
      query: { ids: catIds.toString() }
    });
  }

  renderList() {
    const { categories } = this.state;
    if (!categories || categories.length === 0) {
      return null
    }
    // console.log(categories, "tourFilter");
    return (
      <List classes={'sidebar-list'}>
        {
          categories.map(category => (
            <li key={category.id}>
              <input onChange={this.onChange} checked={ids ? false : ids.indexOf(category.id) !== -1} type="checkbox" id={category.id} />
              <label htmlFor={category._id}>
                {category.name}
              </label>
            </li>
          ))
        }
      </List>
    )
  }

  render() {
    const { categories, isLoaded } = this.state;
    const { router, category } = this.props;
    const ids = router.query.ids || '';
    // console.log(router, "router"); 
    // console.log(this.state.categories, "catt");
    if (isLoaded) {
      return (
        <>
          <SidebarItem title={category.name} classes={'single-sidebar-item-wrap'}>
            {/* {categories && this.renderList()} */}
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

export default withRouter(TourFilter);