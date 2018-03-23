import React from 'react';

class SearchBar extends React.Component {
  constructor () {
  	super();
  	this.state={
  		search: ""
  	};
  }

 updateSearch(event){
 	this.setState({search: event.target.value})
 }


  render() {
    return (
        <div>
	        <input 
		        type="text" 
		        placeholder="Search..." 
		        value={this.state.search}
		        onChange={this.updateSearch.bind(this)}
	        />
        </div>
    );
  }
}
export default SearchBar;