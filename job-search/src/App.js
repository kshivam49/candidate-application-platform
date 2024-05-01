import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import JobList from './components/JobsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
