import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import "../assets/css/main.css";
import "../assets/css/hello.css";
import "../assets/css/about.css";
import "../assets/css/exp.css";
import "../assets/css/works.css";
import { Suspense, createContext, useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { fetchAPI } from "../lib/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "TimesNewerRoman";
  src: url("/fonts/TimesNewerRoman-Regular.otf");
}
@font-face {
  font-family: "Quicksand";
  src: url("/fonts/Quicksand-VariableFont_wght.ttf");
}
@font-face {
  font-family: "RobotoMono";
  src: url("/fonts/RobotoMono-VariableFont_wght.ttf");
}
`;

const MyApp = ({ Component, pageProps }) => {
  const { page } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Quicksand-VariableFont_wght.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
          />
        <link
          rel="preload"
          href="/fonts/RobotoMono-VariableFont_wght.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
          />
        <link
          rel="preload"
          href="/fonts/TimesNewerRoman-Regular.otf"
          as="font"
          type="font/woff"
          crossOrigin=""
          />
      </Head>
      <Suspense fallback={<p>Loading</p>}/>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;
