import React from 'react';

const PageHeader = ({bgImg}) => {
  return (
    <>
      <div className="page-header-area bg-img" style={{backgroundImage: `url(${bgImg})`}}>
      </div>
    </>
  );
};

export default PageHeader;