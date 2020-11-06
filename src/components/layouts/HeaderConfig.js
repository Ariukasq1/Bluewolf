import React from 'react';
import { prefixer } from "../../utils";

function HeaderConfig({ onChangeLang }) {
    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-right">
            <a href="99100303" className="phone"> (+976) 99100303 </a>
            <div className='lang-action'>
                <a onClick={onChangeLang.bind(this, 'en')} ><img src={prefixer('/images/lang/eng.png')} alt='english' /></a>
                <a onClick={onChangeLang.bind(this, 'ja')} ><img src={prefixer('/images/lang/japan.png')} alt='japan' /></a>
                <a onClick={onChangeLang.bind(this, 'ru')} ><img src={prefixer('/images/lang/rus.png')} alt='russian' /></a>
                <a onClick={onChangeLang.bind(this, 'zh')} ><img src={prefixer('/images/lang/china.png')} alt='china' /></a>
                <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars" /></button>
            </div>
        </div>
    );
}

export default HeaderConfig;