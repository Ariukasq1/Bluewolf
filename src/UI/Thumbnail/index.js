import React from 'react';

const Thumbnail = ({ imgSrc, classes }) => {
    return (

        <div className={classes}>
            <img src={imgSrc} alt="bluewolftravel" />
        </div>
    );
};

export default Thumbnail;