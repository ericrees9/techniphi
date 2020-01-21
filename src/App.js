import React, { useState } from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import { Button, Typography, MenuItem } from '@material-ui/core';
import { TextField, Select } from 'material-ui-react-final-form';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  const hasMovies = movies.length > 0;

  const onSubmit = (values) => {
    let objID = {id: `${hasMovies ? movies.length + 1 : movies.length}`};
    let newObj = {...values, ...objID};
    setMovies(movies.concat(newObj));
    console.log(movies);
  }

  const deleteMovie = (id) => {
    let newMoviesArray = movies.filter(movie => movie.id !== id);
    setMovies(newMoviesArray);
  };
  
  return (
    <div className="App">
      <div className="formDiv">
        <Form 
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
            <Typography variant="h3">Movie Locker</Typography>
            <div>
              <Field 
                name="movieTitle" 
                placeholder="The Godfather" 
                component={TextField} 
                label="Movie Title:" 
                margin="normal"
                fullWidth
              />
            </div>
            <div>
              <Field 
                name="movieYear" 
                placeholder="1972" 
                component={TextField} 
                label="Release Year:"
                fullWidth
              />
            </div>
            <div className="ratingDiv">
              <p>Movie Rating: </p>
              <Field 
                name="movieRating" 
                component={Select} 
              >
                <MenuItem value="" />
                <MenuItem value="G">
                  G
                </MenuItem>
                <MenuItem value="PG">
                  PG
                </MenuItem>
                <MenuItem value="PG-13">
                  PG-13
                </MenuItem>
                <MenuItem value="R">
                  R
                </MenuItem>
              </Field>
            </div>
            <Button 
              variant="contained"
              type="submit"
              margin="normal"
              fullWidth
            >
              Submit
            </Button>
            </form>
          )}
        />
      </div>
      <div className="dataDiv">
        {hasMovies && movies.map((movie, index) =>
          <MovieCard movieData={movie} key={index} deleteMovie={deleteMovie}/>
        )}
        {!hasMovies &&
          <Typography variant="h3">Add some movies!</Typography>
        }
      </div>
    </div>
  );
}

export default App;
