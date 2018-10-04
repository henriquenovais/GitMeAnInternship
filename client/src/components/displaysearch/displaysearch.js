import React, { Component } from "react";
import "./displaysearch.css";

class Displaysearch extends Component {
  constructor(){
      super();
      this.state = {
          displaysearch: []
      }
  }  

componentDidMount(){
    fetch('/entities/google')
        .then(result => result.json())
        .then(displaysearch => this.setState({displaysearch}, () => console.log("Search fetched: ", displaysearch)));
}

  render() {
    return (
      <div>
        <h2>Your search results:</h2>
        <ul>
            {this.state.displaysearch.map(displaysearch =>
                <li key={displaysearch.id_website}> <a href={displaysearch.title} rel="noopener noreferrer" target="_blank">{displaysearch.type}</a> </li>
            )}
        </ul>
      </div>
    );
  }
}

export default Displaysearch;
