import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="About page" />
    <h1>about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
