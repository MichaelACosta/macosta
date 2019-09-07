import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Profile" />
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
        minWidth: "50%",
      }}
    >
      <img
        src="https://avatars2.githubusercontent.com/u/7400882?s=460&v=4"
        alt="MichaelACosta Icon"
        style={{ borderRadius: "50%", width: "10%", marginRight: 40 }}
      />
      <div>
        <p>macosta@inf.ufpel.edu.br</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
