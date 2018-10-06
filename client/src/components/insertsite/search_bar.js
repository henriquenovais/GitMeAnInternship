import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  
  onInputChange(input){
    this.props.onSearchTermChange(this.state.term);
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

        <input onClick={input => this.onInputChange(input)} className="btn btn-primary" type="submit" value="Search dank websites" />
      </div>
    );
  }
}

export default SearchBar;
