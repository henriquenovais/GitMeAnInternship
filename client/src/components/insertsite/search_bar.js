import React, { Component } from 'react';
/*
In order to send the information typed in the search bar, the component has to be a class
component.
The information typed on the search bar will be stored on its state and then i'll exported
to the App component.
*/
class SearchBar extends Component {
  constructor(props){
    //Component constructor.
    super(props);

    this.state = { term: ''};
  }
  
  onInputChange(input){
    this.props.onSearchTermChange(this.state.term);
  }
/*
Here, it is important to highligh two properties:
1)value is the property through which the search bar will change its state based on the user input
2)onClick property triggers the onSearchTermChange property which is responsible for sending
the input information to App.js
*/

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
//Export component:
export default SearchBar;
