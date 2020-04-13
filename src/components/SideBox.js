import React from 'react';
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import FeaturedBlog from "../FeaturedBlog";
import Newsletter from "../Newsletter";
import { prefixer, getData } from '../../utils';
import Config from "../../config";
import axios from 'axios';
import moment from "moment";

class SidebarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=blog`)
      .then(res => {
        const categories = res.data;
        const perPage = this.props.perPage || 6;

        if (categories && categories.length > 0) {
          axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}&per_page=${perPage}`)
            .then(res => this.setState({
              posts: res.data
            }))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    const { posts } = this.state;

    return (
      <Sidebar classes={`col-lg-3`}>
        <div className='white-box'>
          <div className='from'>
            from
              <i className='fa fa-info'>info</i>
          </div>

          <div className='price'>
            <span>USD</span>
            <span></span>
          </div>
          <div className='price'>
            <span>USD</span>
            <span>3000$</span>
          </div>
          <button className="btn btn-brand">Book now</button>
        </div>

        <SidebarItem classes={'single-sidebar-item-wrap'}>
          <Newsletter />
        </SidebarItem>

      </Sidebar >
    );
  };
}
export default SidebarList;