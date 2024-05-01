import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import JobList from './components/JobsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Candidate Application Platform</h1>
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
