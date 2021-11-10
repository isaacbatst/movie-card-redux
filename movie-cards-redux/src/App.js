import React from 'react';
import { Provider } from 'react-redux';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <Player />
          <Sidebar />
        </div>
      </Provider>
    );
  }
}
export default App;
