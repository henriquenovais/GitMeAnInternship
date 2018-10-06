import React from "react";

/*
Turning the search list into two components is optimal for code
organization and mapping, to split a big component in smaller parts
can be very useful in order to do a project in a more inclusive manner,
since different component modules allow for cleaner code in general.

However, be very aware of how troubling it is to comunicate information 
through components. A balance has to be kept in mind when it comes to the 
number of components used in the multiple tasks of your application, too much
components might require too much messaging which results in hard to understand
code. 
*/ 

const SearchListItem = ({searchresults}) => {
  //Receiving information from parent component:
    const title = searchresults.title;
    const type = searchresults.type;
  //Returning JSX for HTML rendering:
    return ( 
    <div>
        <li className="list-group-item"> <a href={title} target="_blank" rel="noopener noreferrer">{type}</a> </li>
    </div>
    );
  }


export default SearchListItem;

