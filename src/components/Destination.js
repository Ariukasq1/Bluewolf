import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import SlickSlider from "../UI/Slick";
import { prefixer } from '../utils';
import DestinationSidebar from "./DestinationSidebar";
import axios from 'axios';
import Config from "../config";

const settings = {
  slidesToShow: 3,
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
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?slug=sliders`)
      .then(res => {
        const categories = res.data;

        if (categories && categories.length > 0) {
          axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}`)
            .then(res => this.setState({
              posts: res.data
            }))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  render = () => {
    const { posts } = this.state;

    return (
      <div className="tour-area-wrapper bg-img sp-y ul-top" style={{ backgroundImage: `url(${prefixer('/images/blue.jpg')})` }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <SectionTitle variant="light" title="Mongolian festivals"
                heading="DESTINATIONS"
                text="<strong>Blue Wolf</strong> Travel provides clients with the most comprehensive range of professional eco-travel services in western Mongolia. As the largest tour company in western Mongolia, Blue Wolf offers many advantages that have set them apart and lead to recently being honored by the Mongolian Tourism Board as one of Mongolia's best tour operators."
              />
            </div>
            <div className="col-lg-8">
              <SlickSlider settings={settings}>
                {posts.map(post => (
                  <DestinationSidebar
                    key={post.slug}
                    id={post.slug}
                    slider_image={post.acf.slider_image}
                    title={post.title.rendered}
                  />
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