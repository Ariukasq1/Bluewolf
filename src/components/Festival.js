import React from 'react';
import parse from 'html-react-parser';
import Content from "../UI/Content";
import { prefixer, getData } from '../utils';
import Link from "next/link";
import axios from 'axios';

export default class Festival extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=11`)
      .then(res => this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { heading, since, text, btntext } = post.acf;

    return (
      <div className="about-area-wrapper sm-top" >
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-md-6 col-lg-5">
              <img src={getData(post._embedded, 'image')} alt={post.title} />
            </div>

            <div className="col-md-6 col-lg-7">
              <Content classes="about-content">
                <h6>{parse(post.title.rendered)}</h6>
                <h2>{parse(heading)}</h2>
                <span className="about-since">{since}</span>
                <p>{parse(text)}</p>
                <Link href={prefixer(`tour-category/${post.slug}`)}>
                  <a className="btn-about">
                    {btntext} <i className="fa fa-angle-double-right" />
                  </a>
                </Link>
              </Content>
            </div>
          </div>
        </div>
      </div>
    );
  }
}