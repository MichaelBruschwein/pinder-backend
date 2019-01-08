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
import { CardHeader } from '@material-ui/core';

 
const styles = {
    card: {
        maxWidth: 750,
    },
    media: {
        height: 450,
    },
};

function ItsAMatch(props) {
    const { classes } = props;
    return (
        <Card>
            <CardHeader
                title="Congratulations its a Match!"
            >
            </CardHeader>

            <Grid container spacing={32} justify="center">
                <Grid item xs={6}>
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
                    </Card>
                </Grid>
                {/* Break between cards for reference */}
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="http://rivista-cdn.reptilesmagazine.com/images/cache/cache_d/cache_5/cache_d/frilled-lizard-shutterstock_739998265-82048d5d.jpeg?ver=1542816872&aspectratio=1.5"
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
                    </Card>
                </Grid>
            </Grid>
            <CardActionArea>
                <CardActions>
                    <Grid container alignItems="flex-end">
                        <Button size="large" variant="contained" color="secondary">
                            Contine Finding Pets
                        </Button>
                    </Grid>
                        <Button size="large" variant="contained" color="primary">
                        Go to Matches
                        </Button>
                </CardActions>
            </CardActionArea>
        </Card>

    );
}

ItsAMatch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItsAMatch);