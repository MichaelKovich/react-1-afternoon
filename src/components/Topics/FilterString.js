import React from 'react';

class FilterString extends React.Component {
  constructor() {
    super();

    this.state = {
      names: ['Michael', 'Takeshi', 'Brandon', 'Blake', 'Tyler', 'Picard', 'Riker', 'Kristen'],
      userInput: '',
      filteredNames: []
    }
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  solutionMethod(input) {
    let names = this.state.names;

    let filteredNames = names.filter((element) => {
      return (element === input);
    })

    this.setState({filteredNames: filteredNames});

  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(this.state.names)}</span>
        <input 
          className="inputLine" 
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button 
          className="confirmationButton" onClick={() => this.solutionMethod(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredNames)}</span>
      </div>
    );
  }
}

export default FilterString;