import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      people: [
        {name: "Michael", age: 25},
        {name: "Coorrrraaaal", occupation: "Trash"},
        {name: "Inaho", occupation: "Kataphrakt Operator"}, 
        {name: "Takeshi", age: 32, occupation: "Envoy"}
      ],
      userInput: '',
      filteredPeople: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterPeople(input) {
    let people = this.state.people;
    let filteredPeople = [];
    
    for (let i = 0; i < people.length; i++) {
      if (people[i].hasOwnProperty(input)) {
        filteredPeople.push(people[i]);
      }
    }

    this.setState({filteredPeople: filteredPeople});
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.people, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) } </span>
      </div>
    )
  }
}