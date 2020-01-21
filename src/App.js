import React, { useState } from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import { Button, Typography } from '@material-ui/core';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  const onSubmit = (values) => {
    setMovies(movies.concat(values));
  }

  const deleteMovie = (title) => {
    const newMoviesArray = movies.filter(movie => movie.movieTitle !== title);
    setMovies(newMoviesArray);
  };

  const hasMovies = movies.length > 0;
  
  return (
    <div className="App">
      <div className="formDiv">
        <Form 
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
            <Typography variant="h3">Movie Locker</Typography>
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

            <Button 
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            </form>
          )}
        />
      </div>
      <div className="dataDiv">
        {hasMovies && movies.map((movie, index) =>
          <MovieCard movieData={movie} index={index} deleteMovie={deleteMovie}/>
        )}
        {!hasMovies &&
          <Typography variant="h3">Add some movies!</Typography>
        }
      </div>
    </div>
  );
}

export default App;
