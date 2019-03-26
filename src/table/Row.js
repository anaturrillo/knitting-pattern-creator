import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component {

  render () {
    return <tr>{this.props.cells.map((e, index) => <Cell key={index} patt={e} selectCell={this.props.selectCell(index)}/>)}</tr>
  }
}

export default Row