import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

import RandomSelector from "./components/randomSelector";

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

@observer
class TimerView extends React.Component<{ appState: AppState }, {}> {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  };
}

const appState = new AppState();
// const randomBackend = new RandomBackend();
ReactDOM.render(
  <div>
    <TimerView appState={appState} />
    <RandomSelector />
  </div>,
  document.getElementById("root")
);
