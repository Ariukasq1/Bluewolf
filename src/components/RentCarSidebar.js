import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import Sidebar from "./Sidebar";
import List from "../UI/List";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

export default class extends React.Component {
  static async getInitialProps() {
    let apiMethod = wp.pages();

    const page = await apiMethod
      .slug('rent-this-car')
      .embed()
      .then(data => {
        return data[0];
      });

    return { page };
  }

  render() {
    const { page } = this.props;

    if (!page.title) {
      return <Error statusCode={404} />;
    }

    return (
      <>
        <Sidebar classes={'col-lg-3 mtn-40'}>
          <SidebarItem title={'Booking procedure'} classes={'single-sidebar-item-wrap'}>
            <div className='accomodation-left-sidebar'>
              <List classes={'sidebar-list'}>
                <div className='booking-procedure'>
                  <h5><p dangerouslySetInnerHTML={{ __html: page.title.rendered }} /></h5>
                  {page.content.rendered}
                </div>
              </List>
            </div>
          </SidebarItem>
        </Sidebar>
      </ >
    );
  }
};
