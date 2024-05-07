import React, { Component } from 'react'

export default class Class extends Component {
    handleClick = () =>{
        console.log("qưeqweqw");
        
    }
    update = (ID:any)=>{
        console.log((ID));
        
    }
  render() {
    return (
      <div>Class
        <button onClick={this.handleClick}>CLICK</button>
        <p onClick={()=>this.update(121)}>Demon</p>
      </div>
    )
  }
}

