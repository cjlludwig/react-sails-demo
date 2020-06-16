import React from 'react';
// import Router from 'next/router';
import App, { Container } from 'next/app';
import Head from 'next/head';
import HomePage from './homepage';

class MyApp extends App {
  render() {

  return (
    <Container>
      <Head>
        <title>Test Title</title>
      </Head>
      <HomePage />
    </Container>
  )}
}
export default MyApp;