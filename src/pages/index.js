import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        background: "#fff",
        border: "1px solid #f0f0f0",
        padding: "20px 10px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        borderRadius: 10,
        width: 500,
      }}
    >
      <img
        src="/imgs/macosta.jpeg"
        alt="icon"
        style={{ borderRadius: "50%", width: 100, marginRight: 40 }}
      />
      <div>
        <p>macosta@inf.ufpel.edu.br</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
