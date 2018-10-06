import React, { Component } from "react";
import logo from "./nyancat.gif";
import SearchList from "./components/displaysearch/search_list";
import SearchBar from "./components/insertsite/search_bar";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchresults: []
    };

    this.websiteSearch('t');
     
  }

 

  websiteSearch(input){
    this.term = `/entities/${input}`;
    console.log(this.term);
      fetch(this.term)
      .then(result => result.json())
      .then(searchresults =>
      this.setState({ searchresults }, () => console.log("Search fetched: ", searchresults))
      );
    
   return (this.term);
  }

  componentDidMount() {
    console.log(this.term);
    fetch(this.term)
      .then(result => result.json())
      .then(searchresults =>
      this.setState({ searchresults }, () => console.log("Search fetched: ", searchresults))
      );
  }



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

export default App;
