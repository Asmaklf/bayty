import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCAmpvqyLtuuwAWZ1jzw9QUH36KQ4R85b8",
      authDomain: "bayty-e850b.firebaseapp.com",
      databaseURL: "https://bayty-e850b.firebaseio.com",
      projectId: "bayty-e850b",
      storageBucket: "bayty-e850b.appspot.com",
      messagingSenderId: "816620155201"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
