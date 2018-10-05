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
  }

  componentDidMount() {
    fetch("/entities/google")
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
        <SearchBar />
        <SearchList searchresults={this.state.searchresults}/>
      </div>
    );
  }
}

export default App;
