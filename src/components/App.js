import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    console.log(this.state);
    let result = calculate(this.state, buttonName);
    this.setState(result);
    //console.log(result);
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
//<style type="text/css">
//body {cursor: url(http://www.rw-designer.com/cursor-extern.php?id=104847);}
//</style>
//<a href="http://www.rw-designer.com/cursor-set/hello-kitty-2"
//title="Get free cursors for your web.">Ultimate Hello Kitty Cursors</a>
