import React from 'react';
// import Router from 'next/router';
import App from 'next/app';
import Head from 'next/head';
import HomePage from './homepage';
import Header from '../components/Header';
import Footer from '../components/Footer';

class MyApp extends App {
  render() {

    return (
      <>
          <Head>
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' crossOrigin="anonymous"></link>
            <title>Test Title</title>
          </Head>
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
      </>
    );
  }
};
export default MyApp;