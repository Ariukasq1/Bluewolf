import React from 'react';
import SlickSlider from '../UI/Slick'
import Link from "next/link";
import { getData } from "../utils";
import axios from 'axios';

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}><i className="fa fa-angle-right" /></button>
  )
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}><i className="fa fa-angle-left" /></button>
  )
};

const settings = {
  arrows: true,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
};

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://bluewolftravel.local/wp-json/wp/v2/posts?_embed&categories=55`)
      .then(res => this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { posts } = this.state;
    console.log('slider posts: ', posts);

    return (
      <div className={'slider-area'} >
        <SlickSlider settings={settings}>
          {
            posts.map(post => (
              <div key={post.id}>
                <div className="slider-item" style={{ backgroundImage: `url(${getData(post._embedded, 'image')})` }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="slider-content">
                          <h2>{post.title.rendered}</h2>
                          <Link href={'/category/' + post.slug} >
                            <a className="btn btn-brand">
                              {post.acf.explore}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </SlickSlider>
      </div>
    );
  }
};

export default Slider;