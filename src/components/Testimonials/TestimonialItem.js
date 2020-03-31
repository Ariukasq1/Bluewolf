import React from 'react';
import { prefixer } from '../../utils';

function TestimonialItem(props) {
    return (
        <div className="testimonial-item testimonial-item--3">
            <div className="testimonial-thumb">
                <img src={prefixer('/img/' + props.authorThumb)} alt="BlueWolf" />
            </div>

            <div className="testimonial-txt">
                <img src={prefixer('/img/icons/quote.png')} alt="BlueWolf" />
                <p>{props.quote}</p>
                <h5 className="client-name">{props.author}</h5>
            </div>
        </div>
    );
}

export default TestimonialItem;