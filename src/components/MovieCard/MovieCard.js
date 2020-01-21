import React, { useState } from 'react';
import '../MovieCard/MovieCard.css';
import { Typography, Card, Container, Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const MovieCard = (props) => {
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    
    // console.log(props)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleDelete = () => {
        props.deleteMovie(props.movieData.uuid);
        setOpen(false);
    }

    return(
        <Card className="cardBox" variant="outlined" color="secondary">
            <Container className="dataArea">
                <Typography variant="h4">{props.movieData.movieTitle}</Typography>
                {!props.movieData.movieYear ? "" :  <Typography variant="caption">Released: {props.movieData.movieYear}</Typography> }
                {!props.movieData.movieRating ? "" : <Typography variant="body1">Rated: {props.movieData.movieRating}</Typography> }
            </Container>
            <Container className="actionArea">
                <IconButton onClick={() => setFavorite(!favorite)}>
                    <FavoriteIcon color={favorite === true ? "secondary" : "disabled"}/>
                </IconButton>
                <IconButton onClick={handleOpen}>
                    <DeleteIcon />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle id="alert-dialog-title">{"Delete This Movie?"}</DialogTitle>
                    <DialogContent>
                        Are you sure you want to delete this movie?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="default">
                            No
                        </Button>
                        <Button onClick={handleDelete} color="secondary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Card>
    );
}

export default MovieCard;