import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import SlickSlider from "../UI/Slick";
import { prefixer } from '../utils';
import Link from "next/link";
import axios from 'axios';
import Config from "../config";

const settings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  autoplay: true,
  speed: 500,
  dots: true,
  className: "tour-content-wrap slick-dots--light mtn-md-5",
  responsive: [
    {
      breakpoint: 576,
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
      setting: [],
    };
  }

  componentDidMount() {
    if (this.props.sliders && this.props.sliders.length < 3) {
      settings.slidesToShow = this.posts.sliders.length;
    }
    this.setState({ setting: settings })
  };

  render = () => {
    const { sliders } = this.props;

    if (!sliders) {
      return null
    }

    return (
      <div className="tour-area-wrapper bg-img sp-y" style={{ backgroundImage: `url(${prefixer('/images/blue.jpg')})` }}>
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
                {sliders.map(post => (
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