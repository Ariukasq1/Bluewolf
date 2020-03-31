import React from 'react';
import TourFilter from './TourFilter';
import Sidebar from './Sidebar';
import Loader from "./Loader";
import axios from 'axios';

class TourSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get(`http://bluewolftravel.local/wp-json/wp/v2/categories?parent=9`)
      .then(res => this.setState({
        categories: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  };

  render() {
    const { categories, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <Sidebar classes={`col-lg-3`}>
          {categories.map(category => <TourFilter key={category.id} category={category} />
          )}
        </Sidebar>
      )

    }

    return (
      <ul className="cat-list" >
        <Loader />
      </ul>
    );
  }
}

export default TourSidebar;