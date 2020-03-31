import React from 'react';

function HeaderConfig(props) {
    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-right">
            <a href="tel:00199823568658" className="tel-no"> (+976) 99110303 </a>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars" /></button>
        </div>
    );
}

export default HeaderConfig;