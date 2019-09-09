import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-flexbox-grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Profile" />
    <Row
      center="xs"
      middle="xs"
      style={{
        marginTop: 50,
      }}
    >
      <Col xs={12} sm={4}>
        <img
          src="https://avatars2.githubusercontent.com/u/7400882?s=460&v=4"
          alt="MichaelACosta Icon"
          style={{ borderRadius: "50%", width: "40%" }}
        />
      </Col>
      <Col xs={12} sm={4}>
        <h1>Michael Costa</h1>
        <p>
          Software Developer at O.S. Systems, and master student in computing at
          UFPel.
        </p>
        <span style={{ display: "block" }}>GitHub: MichaelACosta</span>
        <span>macosta@inf.ufpel.edu.br</span>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
