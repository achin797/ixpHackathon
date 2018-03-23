import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mock.json'
//var data = require('json!./mock.json');

class App extends Component {

  render() {
    console.log(JSON.stringify(data.moreInfo));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Egypt</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PopupItem title="Some Information" info={data.moreInfo.Location} />

      </div>
    );
  }
}

function PopupItem(props) {
  console.log(props.info);
  var fields = "";
  var userInfo = "";
  for(var key in props.info){
    fields += key+'\n';
    userInfo += props.info[key]+'\n';
  };
  fields.split('\n');
  userInfo.split('\n');
  console.log(fields);
  console.log(userInfo);
  return (
    <div className="User-information">
      <div className="User-info-header">{props.title}</div>
      <hr></hr>
      <div className="User-info-left">
        {fields}
      </div>
      <div className="User-info-right">
        {userInfo}
      </div>
    </div>

    )
}


export default App;
