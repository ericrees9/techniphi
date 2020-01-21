import React from 'react';
import '../MovieCard/MovieCard.css';
import { Button, Typography } from '@material-ui/core';

const MovieCard = (props) => {
    // console.log(props)
    return(
        <div className="cardBox">
            <Typography variant="h4">{props.movieData.movieTitle}</Typography>
            {!props.movieData.movieYear ? "" :  <Typography variant="caption">Released: {props.movieData.movieYear}</Typography> }
            {!props.movieData.movieRating ? "" : <Typography variant="body1">Rated: {props.movieData.movieRating}</Typography> }
            <Button className="rmButton" variant="contained" color="secondary" onClick={() => props.deleteMovie(props.movieData.movieTitle)}>Remove movie</Button>
        </div>
    );
}

export default MovieCard;