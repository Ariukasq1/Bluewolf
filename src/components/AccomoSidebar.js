import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import Sidebar from "./Sidebar";
import List from "../UI/List";
class AboutCategories extends React.Component {
  render() {
    return (
      <>
        <Sidebar classes={'col-lg-3 mtn-40'}>
          <SidebarItem title={'Booking procedure'} classes={'single-sidebar-item-wrap'}>
            <div className='accomodation-left-sidebar'>
              <List classes={'sidebar-list'}>
                <div className='booking-procedure'>
                  <ol>
                    <li>
                      <div className='step'>
                        Step
                    <span className='number'>
                          1
                    </span>
                      </div>
                      <span className='description'>Select your hotel</span>
                    </li>
                    <li>
                      <div className='step'>
                        Step
                    <span className='number'>
                          2
                    </span>
                      </div>
                      <span className='description'>Send your enquiry</span>
                    </li>
                    <li>
                      <div className='step'>
                        Step
                    <span className='number'>
                          3
                    </span>
                      </div>
                      <span className='description'>Get information with 24 hours</span>
                    </li>
                    <li>
                      <div className='step'>
                        Step
                    <span className='number'>
                          4
                    </span>
                      </div>
                      <span className='description'>Payment (visa or master card)</span>
                    </li>
                    <li>
                      <div className='step'>
                        Step
                    <span className='number'>
                          5
                    </span>
                      </div>
                      <span className='description'>Get your hotel Voucher</span>
                    </li>
                  </ol>
                </div>

              </List>
            </div>
          </SidebarItem>
        </Sidebar>
      </ >
    );
  }
};

export default AboutCategories;