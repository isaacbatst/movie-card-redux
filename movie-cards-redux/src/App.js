import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...data],
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <Player />
        <Sidebar categories={ categories } />
      </div>
    );
  }
}
export default App;
