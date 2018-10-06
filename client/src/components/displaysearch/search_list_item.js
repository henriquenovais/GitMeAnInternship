import React from "react";

const SearchListItem = ({searchresults}) => {
    const title = searchresults.title;
    const type = searchresults.type;

    return ( 
    <div>
        <li className="list-group-item"> <a href={title} target="_blank">{type}</a> </li>
    </div>
    );
  }

/*
  render() {
    return (
      <div>
        <ul className="col-md-4 list-group">
          {searchItems}
        </ul>
      </div>
    );
  }
}
*/

export default SearchListItem;

/*
            {this.state.searchresults.map(searchresults =>
                <li key={searchresults.id_website}> <a href={searchresults.title} rel="noopener noreferrer" target="_blank">{searchresults.type}</a> </li>
            )}
*/
