import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import Sidebar from "./Sidebar";
import List from "../UI/List";
import Config from "../config";
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: Config().apiUrl });

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get(`${Config().apiUrl}/wp/v2/categories?parent=14`)
      .then(res => this.setState({
        categories: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  };
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
