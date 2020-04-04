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
        <SidebarItem classes={'single-sidebar-item-wrap'}>
          <img src={prefixer('/images/banner1.jpg')} alt="Banner" />
        </SidebarItem>

        <SidebarItem title={'FEATURED POSTS'} classes={'single-sidebar-item-wrap'}>
          <div className={'latest-blog-widget'}>
            {
              posts.map(post => (
                <FeaturedBlog
                  key={post.slug}
                  id={post.slug}
                  title={post.title}
                  date={moment(post.date).format('ll')}
                  thumb={getData(post._embedded, 'image')}
                />
              ))
            }
          </div>
        </SidebarItem>

        <SidebarItem classes={'single-sidebar-item-wrap'}>
          <Newsletter />
        </SidebarItem>

      </Sidebar >
    );
  };
}
export default SidebarList;