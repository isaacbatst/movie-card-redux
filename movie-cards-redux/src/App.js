import React from 'react';
import { Provider } from 'react-redux';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import data from './data';
import store from './store';

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
      <Provider store={ store }>
        <div>
          <Player />
          <Sidebar categories={ categories } />
        </div>
      </Provider>
    );
  }
}
export default App;
