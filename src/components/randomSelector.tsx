import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

@observer
export default class RandomSelector extends React.Component<
  {},
  {
    backend: RandomBackend;
    randomNum: Number;
  }
> {
  constructor() {
    super();
    this.state = {
      backend: new RandomBackend(),
      randomNum: -1
    };
  }

  render() {
    let temp = this.state;
    console.log(temp);
    return (
      <div>
        <button onClick={() => this.state.backend.pickRandomOfTen()}>
          The random number is : {this.state.backend.randomNum}
        </button>
        <DevTools />
      </div>
    );
  }
}

class RandomBackend {
  @observable randomNum: Number = -1;

  pickRandomOfTen(): Number {
    this.randomNum = Math.floor(Math.random() * 10);
    return this.randomNum;
  }
}
