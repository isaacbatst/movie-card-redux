import React from "react";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...data]
    }
  }

  render() {
    return (
      <div>
        <Player />
        <Sidebar categories={this.state.categories} />
      </div>
    )
  }
}
export default App;
