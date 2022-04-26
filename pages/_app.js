import React from "react";
import '../styles/globals.css'
import { wrapper } from "../src/redux/index";
import Router from "next/router";
import Head from "next/head";
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500 });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(MyApp);
