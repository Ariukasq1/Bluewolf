import React from 'react';
import OffCanvas from "../../UI/OffCanvas";
import Menu from "../../components/layouts/menu";

const MobileMenu = () => {
  return (
    <OffCanvas type="menu">
      <div className="res-mobile-menu">
        <div className="mobile-nav">
          <Menu />
        </div>
      </div>
    </OffCanvas>
  );
};

export default MobileMenu;