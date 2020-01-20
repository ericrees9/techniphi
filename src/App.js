import React, {useState, useEffect} from 'react';
import './App.css';
import { Form, Field } from 'react-final-form'
import { Button, Typography } from '@material-ui/core';
import MovieTimeline from './components/MovieTimeline/MovieTimeline';

function App() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is updating.")
  }, [setMovies]);

  const onSubmit = (values) => {
    setMovies(movies.concat(values));
    console.log(movies);
  }

  // const movieTimeline = () => {
  //   console.log("this is running.")
  //   return(
  //     movies.map((movie, index) => {
  //       return(
  //         <MovieCard movieData={movie} id={index} deleteMovie={deleteMovie}/>
  //       )
  //     })
  //   );
  // }

  const deleteMovie = (id) => {
    let minus = movies.splice(id, 1)
    setMovies(movies);
    setCount(count + 1);
    console.log(movies);
  }
  
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
          {movies.length > 0 ? <MovieTimeline movieData={movies} deleteMovie={deleteMovie}/> : <Typography variant="h3">Add some movies!</Typography>}
      </div>
    </div>
  );
}

export default App;
