import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact page" />
    <h1>Contact page</h1>
    <p>Welcome to contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
