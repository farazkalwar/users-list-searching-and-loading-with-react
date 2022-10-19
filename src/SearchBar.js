import React from 'react';

class SearchBar extends React.Component{
  handleSearchTextChange = (e)=> {
    this.props.onSearchTextChange(e.target.value);
  }

  render(){
    return (<input type="text" value={this.props.searchText} onChange={this.handleSearchTextChange}></input>) 
  } 
}

export default SearchBar;