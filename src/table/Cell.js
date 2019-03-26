import React, { Component } from 'react';


class Cell extends Component {

  render () {
    return <td className={this.props.patt.cellState}
               onClick={this.props.selectCell('mouseClick')}
               onMouseDown={this.props.selectCell('mouseDown')}
               onMouseOver={this.props.selectCell('mouseOver')}
               onMouseUp={this.props.selectCell('mouseUp')}>

    </td>
  }
}


export default Cell;
