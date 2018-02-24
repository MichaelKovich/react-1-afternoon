import React from 'react';

class Sum extends React.Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  setNumber1(input1) {
    this.setState({number1: input1});
  }

  setNumber2(input2) {
    this.setState({number2: input2});
  }

  generateSum(input1, input2) {
    let sum = parseInt(input1, 10) + parseInt(input2, 10);
    this.setState({sum: sum});
  }

  render() {
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(event) => this.setNumber1(event.target.value)} />
        <input className="inputLine" onChange={(event) => this.setNumber2(event.target.value)} />
        <button className="confirmationButton" onClick={() => this.generateSum(this.state.number1, this.state.number2)}></button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;