import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  return (
    <div className="App">
      <div className="formDiv">
        <h2>This is where the form will go</h2>
      </div>
      <div className="dataDiv">
        <MovieCard></MovieCard>
      </div>
    </div>
  );
}

export default App;
