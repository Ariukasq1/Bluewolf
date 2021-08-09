import React from 'react'
import "../styles/css/slick.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.min.css';
import '../styles/css/timeline.css';
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});

Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}