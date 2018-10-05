import React from "react";
import SearchListItem from "./search_list_item";

const SearchList = (props) => {

  const searchItems = props.searchresults.map((searchresults) => {
    return <SearchListItem key={searchresults.id_website} searchresults={searchresults}/>
  });

    return (
      <div>
        <ul className="col-md-4 list-group">
        <li className="list-group-item active"> Search results: </li>
          {searchItems}
        </ul>
      </div>
    );
  


}

export default SearchList;

/*
            {this.state.searchresults.map(searchresults =>
                <li key={searchresults.id_website}> <a href={searchresults.title} rel="noopener noreferrer" target="_blank">{searchresults.type}</a> </li>
            )}
*/
