import React from 'react';
import { prefixer } from '../utils';

function BlueWolfBook() {
  return (
    <div className="fun-fact-area sm-top parallax" style={{ backgroundImage: `url(${prefixer('/images/blue.jpeg')})` }}>
      <div className="container">
        <div className="row mtn-40">
          <div className="col-6 col-md-3 text-center">
            <div className="book-item">

              <h6 className="book-txt">Blue Wolf Books</h6>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="book-item">
              <h2 className="book-number">
                <a href={`https://www.amazon.com/Mongolia-Country-Guide-Michael-Kohn/dp/1741045789/ref=sr_1_1?ie=UTF8&s=books&qid=1273719778&sr=1-1`} target='_blank'>
                  <img src={prefixer('/images/book1.png')} />
                </a>
              </h2>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="book-item">
              <h2 className="book-number">
                <a href={`https://www.amazon.com/Mongolia-2nd-Bradt-Travel-Guide/dp/1841621781/ref=sr_1_8?ie=UTF8&s=books&qid=1273720061&sr=1-8`} target='_blank'>
                  <img src={prefixer('/images/book2.png')} />
                </a>
              </h2>
            </div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="book-item">
              <h2 className="book-number">
                <a href={`https://www.amazon.com/Eagle-Dreams-Searching-Legends-Mongolia/dp/1592282075/ref=sr_1_1?ie=UTF8&s=books&qid=1273720035&sr=1-1`} target='_blank'>
                  <img src={prefixer('/images/book3.png')} />
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueWolfBook;