import React from 'react';
import '../MovieCard/MovieCard.css';
import { Button, Typography } from '@material-ui/core';

function MovieCard (props) {
    // console.log(props)
    return(
        <div className="cardBox">
            <Typography variant="h5">{props.movieData.movieTitle}</Typography>
            <Button variant="contained" color="secondary" onClick={() => props.deleteMovie(props.id)}>Remove movie</Button>
        </div>
    );
}

export default MovieCard;