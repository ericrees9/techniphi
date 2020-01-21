import React, { useState } from 'react';
import '../MovieCard/MovieCard.css';
import { Typography, Card, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const MovieCard = (props) => {
    const [favorite, setFavorite] = useState(false);
    // console.log(props)
    return(
        <Card className="cardBox" variant="outlined">
            <Container className="dataArea">
                <Typography variant="h4">{props.movieData.movieTitle}</Typography>
                {!props.movieData.movieYear ? "" :  <Typography variant="caption">Released: {props.movieData.movieYear}</Typography> }
                {!props.movieData.movieRating ? "" : <Typography variant="body1">Rated: {props.movieData.movieRating}</Typography> }
            </Container>
            <Container className="actionArea">
                <IconButton onClick={() => setFavorite(!favorite)}>
                    <FavoriteIcon color={favorite == true ? "secondary" : "disabled"}/>
                </IconButton>
                <IconButton onClick={() => props.deleteMovie(props.movieData.movieTitle)}>
                    <DeleteIcon />
                </IconButton>
            </Container>
        </Card>
    );
}

export default MovieCard;