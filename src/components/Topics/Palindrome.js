import React from 'react';

class Palindrome extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  isPalindrome(input) {
    let forward = input;
    let backward = input;

    backward = backward.split('');
    backward = backward.reverse();
    backward = backward.join('');

    if (forward === backward) {
      this.setState({palindrome: 'true'});
    } else {
      this.setState({palindrome: 'false'});
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input 
          className="inputLine" 
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;