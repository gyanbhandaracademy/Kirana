import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children,title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        {/* <link rel='canonical' href='http://mystie.com/example' /> */}
      </Helmet>
      <Header />
      <main style={{ minHeight: "74vh" }}>
      <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Kirana store - shop now',
  description: 'kirana store for wheat, rice, pulse and basic need goods',
  keywords: 'wheat, rice, pulse',
  author: 'Myself'
}

export default Layout