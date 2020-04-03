import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import SlickSlider from "../UI/Slick";
import { prefixer, getData } from '../utils';
import Config from "../config";
import axios from 'axios';

const settings = {
  slidesToShow: 2,
  arrows: false,
  dots: true,
  className: "testimonial-content--3 testimonial-grid",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}
export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=36`)
      .then(res => this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="testimonial-area bg-offwhite sp-y sm-top" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <SectionTitle
                title="TESTIMONIALS"
                heading="Our Customer <br/>Loves What we do"
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-11 m-auto">
              <div className="testimonial-content-wrap m-0 pl-0">
                <SlickSlider settings={settings}>
                  {
                    posts.map(post => (
                      <div key={post.slug}>
                        <div className="testimonial-item testimonial-item--3">
                          <div className="testimonial-thumb">
                            <img src={getData(post._embedded, 'image')} alt={post.title} />
                          </div>

                          <div className="testimonial-txt">
                            <img src={prefixer('/img/icons/quote.png')} alt="quote-icon" />
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                            <h5 className="client-name">{post.title.rendered}</h5>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </SlickSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}