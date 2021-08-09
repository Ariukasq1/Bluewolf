import React from 'react';
import TourFilter from './TourFilter';
import Sidebar from '../Sidebar';
import duration from "./duration.json"
import theme from "./theme.json"
import where from "./where.json"
class TourSidebar extends React.Component {

  render() {
    const { subCats } = this.props;

    if (!subCats || subCats.length === 0) {
      return null
    }
    // return (
    //   <Sidebar classes={`col-lg-3`}>
    //     {subCats.map(category => <TourFilter key={category.id} category={category} />
    //     )}
    //   </Sidebar>
    // )
    return (
      <Sidebar classes={'col-lg-3'} >
        {subCats.map((category, ind) => <TourFilter key={category.id} category={category} sub={ind === 0 ? duration : ind === 1 ? theme : where} />)}
      </Sidebar>
    )
  }
}

export default TourSidebar;