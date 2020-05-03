import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from '../components/box'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box p={[2, 6, 8]}>
        <p>
        heheheh 
      </p>
    </Box>
    <h1>Yo</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
