import React, {useState} from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  const onSubmit = (values) => {
    setMovies(movies.concat(values));
    console.log(movies);
  }

  const movieTimeline = (movies) => {
    return(
      movies.map((movie, index) => {
        return(
          <MovieCard movieData={movie}/>
        )
      })
    );
  }
  
  return (
    <div className="App">
      <div className="formDiv">
        <Form 
          onSubmit={onSubmit}
          render={({ handleSubmit}) => (
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
          {movies.length > 0 ? movieTimeline(movies) : <h1>Add some movies!</h1>}
      </div>
    </div>
  );
}

export default App;
