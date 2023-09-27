import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout title={'go back- page not found'}>
        <div className='nopage'>
          <h1 className='nopage-title'>404</h1>
          <h2 className='nopage-heading'>Oops ! Page Not Found</h2>
          <Link to="/" className='nopage-button'>
            Go Back
          </Link>
        </div>
    </Layout>
  )
}

export default PageNotFound