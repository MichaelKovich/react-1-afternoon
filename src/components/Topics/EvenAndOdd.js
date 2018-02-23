import React from 'react';

class EvenAndOdd extends React.Component {
  constructor() {
    super();
    
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  assignEvenAndOdds(userInput) {
    var inputArr = userInput.split(',');
    var evenArr = [];
    var oddArr = [];

    inputArr.forEach((element) => {
      if (element % 2 === 0) {
        evenArr.push(parseInt(element, 10));
      } else {
        oddArr.push(parseInt(element, 10));
      }
    })

    this.setState({evenArray: evenArr, oddArray: oddArr});
  }

  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)}></input>
        <button className='confirmationButton' onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;
