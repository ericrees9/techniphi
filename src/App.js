import React, {useState} from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  const onSubmit = (values) => {
    // console.log(`${JSON.stringify(values)}`);
    movies.push(values);
    console.log(movies);
  }
  
  return (
    <div className="App">
      <div className="formDiv">
        <Form 
          onSubmit={onSubmit}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit}>
            <h2>Test Form</h2>
            <div>
              <label>Movie Title: </label>
              <Field name="movieTitle" component="input" placeholder="Movie Title" />
            </div>
            <div>
              <label>Release Year: </label>
              <Field name="movieYear" component="input" placeholder="2020" />
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

            <button 
              type="submit"
            >
              Submit
            </button>
            </form>
          )}
        />
      </div>
      <div className="dataDiv">
        {movies.map((movie, index) => {
          return(
            <MovieCard movieData={movie}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
