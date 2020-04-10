import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Menu from './menu';
import { prefixer } from "../../utils";
import { defaultDesc, defaultImage } from "./constants";

function Header({ title, description, image, url, onChangeLang }) {
  const [isScrolled, setScrollChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 60 && !isScrolled) {
        return setScrollChange(true);
      }

      if (scrollTop < 60 && isScrolled) {
        return setScrollChange(false);
      }
      return null;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const additionalClass = isScrolled ? 'sticky' : '';

  let defaultUrl = '';

  if (process.browser) {
    defaultUrl = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{title || 'Bluewolftravel'}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:url" content={url || defaultUrl} />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={title || 'Bluewolftravel'} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:image" content={image || prefixer(defaultImage)} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Bluewolftravel'} />
        <meta name="twitter:description" content={description || defaultDesc} />
        <meta name="twitter:image" content={image || prefixer(defaultImage)} />

        <link rel="shortcut icon" id="favicon" href={prefixer("/images/favicon.png")}></link>
      </Head>

      <header className={`header-area ${additionalClass}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-lg-3">
              <div className="logo-area">
                <a href="/">
                  <img src={prefixer("/images/logo.png")} alt="bluewolf-logo" />
                </a>
              </div>
            </div>

            <div className="col-lg-7 d-none d-lg-block">
              <div className="navigation-area mt-lg-3">
                <ul className="main-menu nav">
                  <Menu />
                </ul>
              </div>
            </div>

            <div className="col-7 col-lg-2">
              <div className="header-action mt-lg-3 text-right">
                <div className='phone'>
                  <a href="99110303" className="tel-no"> (+976) 99110303 </a>
                </div>
                <div className='lang-action'>
                  <a onClick={onChangeLang.bind(this, 'en')} ><img src={prefixer('/images/lang/eng.png')} alt='english' /></a>
                  <a onClick={onChangeLang.bind(this, 'en')} ><img src={prefixer('/images/lang/japan.png')} alt='english' /></a>
                  <a onClick={onChangeLang.bind(this, 'jp')} ><img src={prefixer('/images/lang/rus.png')} alt='english' /></a>
                  <a onClick={onChangeLang.bind(this, 'jp')} ><img src={prefixer('/images/lang/china.png')} alt='english' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
