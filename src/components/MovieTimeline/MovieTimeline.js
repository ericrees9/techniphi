import React, { useState } from 'react';
import '../MovieTimeline/MovieTimeline.css';
import MovieCard from '../MovieCard/MovieCard'

function MovieTimeline (props) {
    return(
      props.movieData.map((movie, index) => {
        return(
          <MovieCard movieData={movie} index={index} deleteMovie={props.deleteMovie}/>
        )
      })
    );
}

export default MovieTimeline;