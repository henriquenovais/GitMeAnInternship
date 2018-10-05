import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super();
    this.state = { term: ''};
  }
  
  userUsage(event){
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          className="input-group-text" 
          type="text" 
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
        <br/>

        <input className="btn btn-primary" type="submit" value="Search dank memes" />
      </div>
    );
  }
}

export default SearchBar;
