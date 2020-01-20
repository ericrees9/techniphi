import React from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import MovieCard from './components/MovieCard/MovieCard';

const onSubmit = (values) => {
  console.log(`${JSON.stringify(values, 0, 2)}`);
}

function App() {
  return (
    <div className="App">
      <div className="formDiv">
        <Form 
          onSubmit={onSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
            <h2>Test Form</h2>
            <div>
              <label>Movie Title: </label>
              <Field name="Movie Title" component="input" placeholder="Movie Title" />
            </div>
            <div>
              <label>Movie Rating: </label>
              <Field name="movieRating" component="select">
                <option />
                <option>G</option>
                <option>PG</option>
                <option>PG-13</option>
                <option>R</option>
              </Field>
            </div>
            <div>
              <label>Release Year: </label>
              <Field name="Movie Year" component="input" placeholder="2020" />
            </div>

            <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
      <div className="dataDiv">
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
