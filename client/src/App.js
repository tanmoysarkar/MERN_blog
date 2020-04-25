import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import 'bootstrap/scss/bootstrap.scss';
import './App.css';
import LandingPage from "./components/user/LandingPage";



class App extends Component{
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <LandingPage/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
