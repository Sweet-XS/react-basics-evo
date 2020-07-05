import React, { Component } from "react";

class ConditionalRendery extends Component {
  constructor() {
    super();

    this.state = {
      isLogged: false,
      isHuman: false,
    };
  }

  render() {
    //if else rendering
    /*if (this.state.isLogged) {
      return <div>Welcome User</div>;
    } else {
      return <div>Welcome Guest</div>;
    }*/
    //element variables rendering
    /*let message;
    if (this.state.isHuman) {
      message = <div>Welcome Human</div>;
    } else {
      message = <div>Welcome Alien</div>;
    }
    return <div>{message}</div>*/
    //ternary operator rendering / best one
    return(
        this.state.isHuman ? <div>Welcome Human</div> : <div>Welcome Alien</div>
    )
    //short circuit operator rendering / good option
    //return this.state.isHuman && <div>Welcome Human</div>

  }
}

export default ConditionalRendery;
