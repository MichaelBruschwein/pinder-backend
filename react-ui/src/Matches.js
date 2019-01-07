import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = {
  card: {
    maxWidth: 750,
  },
  media: {
    height: 450,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid
    container
    justify="center"
    alignItems="center">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.reptilegardens.com/assets/images/gallery/images/agama_copy.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Grid
          container
          justify="right"
          >
        <Button size="large" color="secondary">
          Dislike
        </Button>
            </Grid>
        <Button size="large" color="primary">
          Like
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);