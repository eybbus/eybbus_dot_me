import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Hexagon from '../components/hexagon'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hexagon />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
