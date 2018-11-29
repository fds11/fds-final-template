import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" component={HomePage} />
        </>
      </BrowserRouter>
    );
  }
}
