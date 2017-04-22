import React, {Component} from 'react';
import ListJobs from './ListJobs'
import AddJobs from './AddJobs'


class App extends Component {
  render() {
    return (
      <div>
        <AddJobs />
        <ListJobs />
      </div>
    );
  }
}

export default App;
