import React, { Component } from 'react';
import './insertsite.css';

class Insertsite extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  
  userUsage(event){
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.userUsage} />
        <br/>
        <input type="submit" value="Search dank memes" />
      </div>
    );
  }
}

export default Insertsite;
