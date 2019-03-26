import React, { Component } from 'react';
import './App.css';
import Row from './table/Row'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selecting: false,
      pattern: [
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
        [{cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}, {cellState: 'empty', stich: ''}],
      ]
    };
    this.selectCell = this.selectCell.bind(this);
  }

  selectCell (row) {
    const self = this;
    return cell => eventName => function () {
      let selecting = self.state.selecting;

      if (eventName === 'mouseDown' || eventName === 'mouseUp') {
        selecting = !selecting;
        self.setState({selecting:!self.state.selecting});
      }


      if (selecting) {
        console.log(eventName, row, cell);
        const newPattern = [...self.state.pattern];
        const currentClass = newPattern[row][cell].cellState;
        newPattern[row][cell] = Object.assign({}, {cellState: eventName !== 'mouseUp' && currentClass === 'selected'?'empty':'selected'});
        self.setState({pattern: newPattern});
        console.log(self.state)
      }
    }

  }

  render() {
    return (
      <table>
        <tbody>
        {this.state.pattern.map((e, index) => <Row key={index}  cells={e} selectCell={this.selectCell(index)} />)}
        </tbody>
      </table>
    );
  }
}

export default App;
