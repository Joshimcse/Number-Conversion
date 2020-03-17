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
      activeSystem: 'Decimal',
      number: {
        binary: '',
        decimal: '',
        octal: '',
        hexa: '',
      },
      desc: {
        binary:
          'Binary is the simplest kind of number system that uses only two digits of 0 and 1. By using these digits computational problems can be solved by machines because in digital electronics a transistor is used in two states. Those two states can be represented by 0 and 1. That is why this number system is the most preferred in modern computer engineer, networking and communication specialists, and other professionals.',
        decimal:
          'Decimal number system is the most commonly used and the most familiar one to the general public. It is also known as Base 10 numbering system since it is based on 10 following symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. In decimal system, every digit has its own position as well as the decimal point. I.e. the number 356.74 has 4 in the Hundredths position, 7 in the Tenths position, 6 in the Units position, 5 in the Tens position, and 3 in the Hundreds position. Decimal number system is also one of the oldest known numeral system, which is historically related to Hindu-Arabic numeral system.',
        octal:
          'Octal or oct for short, is the base-8 number system, and uses the digits 0 to 7. Octal numerals can be made from binary numerals by grouping consecutive binary digits into groups of three (starting from the right). For example, the binary representation for decimal 74 is 1001010. Two zeroes can be added at the left: (00)1001 010, corresponding the octal digits 1 1 2, yielding the octal representation 112.',
        hexadecimal:
          'Hex, or hexadecimal, is a number system of base 16. This number system is especially interesting because in our casually used decimal system we have only 10 digits to represent numbers. As hex system has 16 digits, the extra needed 6 digits are represented by the first 6 letters of English alphabet. Hence, hex digits are 0,1,2,3,4,5,6,7,8 and 9 A, B, C, D, E, F. This number system is the most commonly used in mathematics and information technologies. I.e. in html programming colors can be represented by a 6-digit hexadecimal number: FFFFFF represents white, 000000 represents black, and so on.',
      },
    };
  }

  fieldsHandler = numberSystem => {
    this.setState({
      activeSystem: numberSystem,
    });
    console.log(this.state.numberSystem);
  };

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
            active={this.state.activeSystem}
            data={this.state.number}
            handlers={{
              binaryHandler: this.binaryHandler,
              decimalHandler: this.decimalHandler,
              octalHandler: this.octalHandler,
              hexaHandler: this.hexaHandler,
              fieldsHandler: this.fieldsHandler,
            }}
          />
          <Info
            data={{
              title: this.state.activeSystem,
              desc: this.state.desc[this.state.activeSystem.toLowerCase()],
            }}
          />
          <Table />
        </Layout>
      </div>
    );
  }
}
