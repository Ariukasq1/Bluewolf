import React from 'react';
import Content from "../UI/Content";
import { prefixer, getData } from '../utils';
import Link from "next/link";
import axios from 'axios';
import Config from "../config";
import { LanguageConsumer } from './LanguageContext';

class Festival extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  getData = () => {
    const { apiUrl } = this.props;
    console.log('apiUrl: ', apiUrl);
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=festivals`)
      .then(res => {
        const categories = res.data;
        console.log('category', res.data);

        if (categories && categories.length > 0) {
          axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}`)
            .then(res => {
              console.log('data: ', res.data)
              this.setState({
                posts: res.data

              })
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getData()
  };

  componentDidUpdate(prevProps) {
    if (this.props.apiUrl !== prevProps.apiUrl) {
      this.getData()
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="about-area-wrapper sm-top" >
        <div className="container">
          {
            posts.map(post => (
              <div key={post.slug} className="row align-items-lg-center">
                <div className="col-md-6 col-lg-5">
                  <img src={getData(post._embedded, 'image')} alt={post.title.rendered} />
                </div>

                <div className="col-md-6 col-lg-7">
                  <Content classes="festival-content">
                    <h6><div
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered
                      }} /></h6>
                    <h2>{post.acf.heading}</h2>
                    <span className="festival-since">{post.acf.since}</span>
                    <p>{post.acf.text}</p>
                    <Link href={prefixer(`tour-category/mongolia`)}>
                      <a className="btn-festival">
                        {post.acf.btntext} <i className="fa fa-angle-double-right" />
                      </a>
                    </Link>
                  </Content>
                </div>
              </div>
            )
            )}
        </div>
      </div>
    );
  }
}

export default (props) => (
  <LanguageConsumer>
    {({ apiUrl }) => (<Festival {...props} apiUrl={apiUrl} />)}
  </LanguageConsumer>);