import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>API_URL={process.env.REACT_APP_API_URL}</p>
      </div>
    );
  }
}
