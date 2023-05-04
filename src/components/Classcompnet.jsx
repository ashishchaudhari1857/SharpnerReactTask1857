import React, { Component } from "react";

class Classcompnet extends Component {
  constructor() {
    super();
    this.state = {
      name: "jay",
      count:0

    };
  }

  change() {
    // let x=this.count+1;
    this.setState({ name: "jayakishori" ,count:this.state.count+1});
  }
  render() {

    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        
        <button onClick={()=>this.change()}>click</button>
      </>
    );
  }
}

export default Classcompnet;
