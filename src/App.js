import React from 'react';
import './App.css';
import usersList from './model';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dataLoading: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dataLoading: true });
    }, 200);
  }

  render() {
    if (!this.state.dataLoading) return <div>Loading...</div>

    return (
      <div>
        Result
        <ul>
        {usersList.map((res) =>
          <li key={res.id.toString()}>{res.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
