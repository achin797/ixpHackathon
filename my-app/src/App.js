import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import logo from './logo.png';
import data from './people.js';
import './App.css';
//var data = require('json!./mock.json');

const KEYS_TO_FILTERS = ['name', 'team', 'moreInfo.features.currentlyWorking.task', 'moreInfo.features.previouseWork.task'];

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  render() {
    const filteredData = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <SearchInput className="Search-input" onChange={this.searchUpdated} />
        <ul>
          {filteredData.map(x => <li>{x.name}</li>)}
        </ul>



        <PopupItem title="Some Information" info={data[0].moreInfo} />

      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

function PopupItem(props) {
  console.log(props.info);
  var fields = "";
  var userInfo = "";
  var searchResults = recursiveJSONSearch(fields,userInfo,props.info);
  fields = searchResults[0];
  userInfo = searchResults[1];
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

function recursiveJSONSearch(fields,userInfo,items){
  //console.log("ITEMS"+JSON.stringify(items));
  for(var key in items){
    console.log(key + " - " + typeof key);
    console.log(items[key] + " - " + typeof items[key]);
    fields += key+'\n';
    if (typeof items[key] === 'object'){
      userInfo += '-\n';
      var searchResults = recursiveJSONSearch(fields,userInfo,items[key]);
      fields = searchResults[0];
      userInfo = searchResults[1];
    } else {
      userInfo += items[key]+'\n';
    }

  }
  return [fields, userInfo];
}

export default App;
