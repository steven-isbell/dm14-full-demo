import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';

import routes from './routes';
import store from './store';

import './App.css';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
