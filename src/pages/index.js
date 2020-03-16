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
      desc: {
        binary:
          'Hex, or hexadecimal, is a number system of base 16. This number system is especially interesting because in our casually used decimal system we have only 10 digits to represent numbers. As hex system has 16 digits, the extra needed 6 digits are represented by the first 6 letters of English alphabet. Hence, hex digits are 0,1,2,3,4,5,6,7,8 and 9 A, B, C, D, E, F. This number system is the most commonly used in mathematics and information technologies. I.e. in html programming colors can be represented by a 6-digit hexadecimal number: FFFFFF represents white, 000000 represents black, and so on.',
        decimal: 'lorem ipsum',
        octal: '',
        hexa: '',
      },
      number: {
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      },
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
        number: {
          binary: '',
          decimal: '',
          octal: '',
          hexa: '',
        },
      });
    } else {
      this.setState({
        number: {
          binary: this.binary,
          decimal: this.decimal,
          octal: this.octal,
          hexa: this.hexa,
        },
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
        number: {
          binary: '',
          decimal: '',
          octal: '',
          hexa: '',
        },
      });
    } else {
      this.setState({
        number: {
          binary: this.binary,
          decimal: this.decimal,
          octal: this.octal,
          hexa: this.hexa,
        },
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
        number: {
          binary: '',
          decimal: '',
          octal: '',
          hexa: '',
        },
      });
    } else {
      this.setState({
        number: {
          binary: this.binary,
          decimal: this.decimal,
          octal: this.octal,
          hexa: this.hexa,
        },
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
        number: {
          binary: '',
          decimal: '',
          octal: '',
          hexa: '',
        },
      });
    } else {
      this.setState({
        number: {
          binary: this.binary,
          decimal: this.decimal,
          octal: this.octal,
          hexa: this.hexa,
        },
      });
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Number Conversion</title>
        </Helmet>
        <Layout>
          <Calc
            data={this.state.number}
            methods={{
              binaryHandler: this.binaryHandler,
              decimalHandler: this.decimalHandler,
              octalHandler: this.octalHandler,
              hexaHandler: this.hexaHandler,
            }}
          />
          <Info />
          <Table />
        </Layout>
      </div>
    );
  }
}
