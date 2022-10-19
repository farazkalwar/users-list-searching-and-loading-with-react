import React from 'react';
import UsersList from './usersList'
import usersModel from './model';
import SearchBar from './SearchBar';
import { Loading } from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dataLoading: false, searchText: ''}
  }

  searchTextChange = (searchText) => {
    this.setState({ searchText: searchText })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dataLoading: true});
    }, 500);
  }

  render() {
    if (!this.state.dataLoading){
      return <Loading></Loading>
    } 

    return (
      <div>
        Search
        <br />
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.searchTextChange}></SearchBar>
        <UsersList searchText={this.state.searchText} users={usersModel}></UsersList>
      </div>
    );
  }
}

export default App;
