import React from 'react';
import SidebarItem from "./Sidebar/SidebarItem";
import Sidebar from "./Sidebar";
import List from "../UI/List";
import LI from "../UI/List/Item";
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
          <SidebarItem title="Why booking with us">
            <List classes="service-list">
              <LI><i className="fa fa-check-square-o" /> Guaranteed lower rates- All hotel rooms in Mongolia booked through us are guaranteed to be at a lower rate than the hotel’s own rack rate.</LI>
              <LI><i className="fa  fa-check-square-o" /> No Cancellation Fee- Any booking made with us can be cancelled for free up until 3 days prior to your arrival date.</LI>
              <LI><i className="fa fa-check-square-o" /> Safe and Easy payment methodWe now accept Visa and MasterCard as methods of payment.</LI>
              <LI><i className="fa  fa-check-square-o" /> Best selectedThe choice is easy – for safety, quality and the best prices available, book your hotel in Mongolia with us.</LI>
            </List>
          </SidebarItem>
        </Sidebar>
      </ >
    );
  }
};

export default AboutCategories;