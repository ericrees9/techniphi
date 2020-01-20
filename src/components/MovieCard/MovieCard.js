import React from 'react';
import '../MovieCard/MovieCard.css';

function MovieCard (props) {
    console.log(props);
    return(
        <div className="cardBox">
            <h2>{props.movieData.movieTitle}</h2>
        </div>
    );
}

export default MovieCard;