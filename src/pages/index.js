import React, { Component } from "react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

import Info from "../components/info"
import Table from "../components/table"
import Calc from "../components/calc"

export default class index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>মূলপাতা</title>
        </Helmet>
        <Layout>
          <Calc />
          <Info />
          <Table />
        </Layout>
      </div>
    )
  }
}
