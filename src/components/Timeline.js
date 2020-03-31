import React from 'react';

const TimelineWrap = ({ icon, children }) => {
    return (
        <div className={'cd-timeline-wrap'}>
            <span className="timeline-icon"><i className={`fa fa-${icon}`} /></span>
            <div className={'cd-timeline'}>
                {children}
            </div>
        </div>
    );
};

export default TimelineWrap;