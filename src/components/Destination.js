import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import SlickSlider from "../UI/Slick";
import {prefixer} from '../utils';
import Link from "next/link";
import axios from 'axios';
import Config from "../config";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 3,
  arrows: false,
  autoplay: false,
  dots: true,
  className: "tour-content-wrap slick-dots--light mtn-md-5",
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

class Destination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      setting: [],
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=sliders`)
      .then(res => {
        const categories = res.data;

        if(categories && categories.length > 0) {
          axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}`)
            .then(res => this.setState({
              posts: res.data
            }
            ))
            .then(() => {

              if(this.state.posts.length < 3) {
                settings.slidesToShow = this.state.posts.length;
              }
              this.setState({setting: settings})
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  render = () => {
    const {posts} = this.state;

    return (
      <div className="tour-area-wrapper bg-img sp-y" style={{backgroundImage: `url(${prefixer('/images/blue.jpg')})`}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <SectionTitle variant="light" title="Mongolian festivals"
                heading="DESTINATIONS"
                text="<strong>Blue Wolf</strong> Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators."
              />
            </div>
            <div className="col-lg-8">
              <SlickSlider settings={this.state.setting}>
                {posts.map(post => (
                  <div key={post.slug} className="destination-item">
                    <figure className="tours-pic">
                      <Link href={`${prefixer('/tour-category/' + post.slug)}`}>
                        <a>
                          <img src={post.acf.slider_image} alt={post.title.rendered} />
                        </a>
                      </Link>
                    </figure>
                    <div className="tours-info">
                      <h5>
                        <Link href={`${prefixer('/tour-category/' + post.slug)}`} ><a>{post.title.rendered}</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                ))
                }
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Destination;