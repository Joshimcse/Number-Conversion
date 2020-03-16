import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

import Info from '../components/info';
import Table from '../components/table';
import Calc from '../components/calc';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: '',
      decimal: '',
      octal: '',
      hexa: '',
    };
  }

  binaryHandler = event => {
    this.value = event.target.value;

    this.decimal = parseInt(this.value, 2);
    this.binary = this.decimal.toString(2);
    this.octal = this.decimal.toString(8);
    this.hexa = this.decimal.toString(16).toUpperCase();

    if (this.value === '' || isNaN(this.decimal)) {
      this.setState({
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      });
    } else {
      this.setState({
        binary: this.binary,
        decimal: this.decimal,
        octal: this.octal,
        hexa: this.hexa,
      });
    }
  };

  decimalHandler = event => {
    this.value = event.target.value;

    this.decimal = parseInt(this.value, 10);
    this.binary = this.decimal.toString(2);
    this.octal = this.decimal.toString(8);
    this.hexa = this.decimal.toString(16).toUpperCase();

    if (this.value === '' || isNaN(this.decimal)) {
      this.setState({
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      });
    } else {
      this.setState({
        binary: this.binary,
        decimal: this.decimal,
        octal: this.octal,
        hexa: this.hexa,
      });
    }
  };

  octalHandler = event => {
    this.value = event.target.value;

    this.decimal = parseInt(this.value, 8);
    this.binary = this.decimal.toString(2);
    this.octal = this.decimal.toString(8);
    this.hexa = this.decimal.toString(16).toUpperCase();

    if (this.value === '' || isNaN(this.decimal)) {
      this.setState({
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      });
    } else {
      this.setState({
        binary: this.binary,
        decimal: this.decimal,
        octal: this.octal,
        hexa: this.hexa,
      });
    }
  };

  hexaHandler = event => {
    this.value = event.target.value;

    this.decimal = parseInt(this.value, 16);
    this.binary = this.decimal.toString(2);
    this.octal = this.decimal.toString(8);
    this.hexa = this.decimal.toString(16).toUpperCase();

    if (this.value === '' || isNaN(this.decimal)) {
      this.setState({
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      });
    } else {
      this.setState({
        binary: this.binary,
        decimal: this.decimal,
        octal: this.octal,
        hexa: this.hexa,
      });
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>মূলপাতা</title>
        </Helmet>
        <Layout>
          <Calc
            data={this.state}
            methods={{
              binaryHandler: this.binaryHandler,
              decimalHandler: this.decimalHandler,
              octalHandler: this.octalHandler,
              hexaHandler: this.hexaHandler
            }}
          />
          <Info />
          <Table />
        </Layout>
      </div>
    );
  }
}
