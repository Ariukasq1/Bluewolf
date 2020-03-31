import React from 'react';
import SlickSlider from '../UI/Slick'
import Link from "next/link";
import Config from "../config";
import WPAPI from 'wpapi';
import { getData } from "../utils";

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

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Slider extends React.Component {
  static async getInitialProps() {
    const categories = await wp
      .categories()
      .slug('sliders')
      .embed();


    const posts = await wp
      .posts()
      .category(categories[0].id)
      .perPage(40)
      .embed();

    return { posts, categories };
  }

  render() {
    const { posts } = this.props;

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