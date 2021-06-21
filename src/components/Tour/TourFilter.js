import React from 'react';
import SidebarItem from "../Sidebar/SidebarItem";
import List from "../../UI/List";
import axios from 'axios';
import Loader from "../Loader";
import { withRouter } from 'next/router';
import Config from "../../config";

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

    axios.get(`${Config().apiUrl}/wp/v2/categories?parent=${category.id}`)
      .then(res => this.setState({
        categories: res.data,
        isLoaded: true
      }))
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
    return (
      <List classes={'sidebar-list'}>
        {
          categories.map(category => (
            <li key={category.id}>
              <input onChange={this.onChange} checked={ids.indexOf(category.id) !== -1} type="checkbox" id={category.id} />
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