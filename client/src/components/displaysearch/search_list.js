import React from "react";
import SearchListItem from "./search_list_item";
/*
Since the search results will not receive any user input or whatsoever, it would be optimal
to have this as a functional component since there no need for a state.
*/
const SearchList = props => {
  /*
  This function is the constructor equivalent of a class based component, receiving 
  upstream's information.
  */

  //receiving props from the searchresults property and returning it through the searchItems function.
  //The map function is part of react's magic to substitute the usage of loops, very useful when it comes
  //to printing lists but be aware because such function is an array exclusive feature.
  const searchItems = props.searchresults.map(searchresults => {
    return (
      <SearchListItem
        key={searchresults.id_website}
        searchresults={searchresults}
      />
    );
  });
  //Returning component for rendering:
  return (
    <div>
      <ul className="col-md-4 list-group">
        <li className="list-group-item active"> Search results: </li>
        {searchItems}
      </ul>
    </div>
  );
};
//export component:
export default SearchList;
