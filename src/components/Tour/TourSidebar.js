import React from 'react';
import TourFilter from './TourFilter';
import Sidebar from '../Sidebar';

class TourSidebar extends React.Component {

  render() {
    const { subCats } = this.props;

    if (!subCats || subCats.length === 0) {
      return null
    }
    return (
      <Sidebar classes={`col-lg-3`}>
        {subCats.map(category => <TourFilter key={category.id} category={category} />
        )}
      </Sidebar>
    )
  }
}

export default TourSidebar;