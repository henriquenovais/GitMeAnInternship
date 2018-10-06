import React, { Component } from "react";
import logo from "./nyancat.gif";
import SearchList from "./components/displaysearch/search_list";
import SearchBar from "./components/insertsite/search_bar";
import "./App.css";

//This is the main component in the client side application.

/*
It is a class based component since information has to be saved in its state in order to
appropriatly display the search.
The components used here are organized so that downstream information flow can be stablished, 
in other words, only the most parent component receives information and then transmits it through
the rest of the application's component.
*/

class App extends Component {

  constructor(props) {
    super(props); //inherit properties from Component
    this.state = {
      searchresults: [] //Define searchresults as an array, will be very useful later.
    };

    this.websiteSearch('website'); //setting initial value.
     
  }

 

  websiteSearch(input){
    //This is the search function!
    this.term = `/entities/${input}`; //String witch will be used to fetch information from server
      fetch(this.term) //fetch information in the localhost:5000/entities/${input}
      .then(result => result.json()) //promise that returns the query in json.
      .then(searchresults => //save result.json in App's state and display fetched results
      this.setState({ searchresults }, () => console.log("Search fetched: ", searchresults))
      );
    
   return (this.term);
  }
/*
Component hierarchy:
  1)App.js
    2)SearchBar

    2)SearchList
      3)SearchListItem

*/ 
//The following function is used in order to render the HTML file through JSX and some React magic:
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchBar onSearchTermChange={term => this.websiteSearch(term)} /> 
        <SearchList searchresults={this.state.searchresults}/>
      </div>
    );
  }
}
//Export the component module:
export default App;
