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
import { Redirect } from 'react-router-dom'


const styles = {
    card: {
        maxWidth: 750,
    },
    media: {
        height: 450,
    },
};
class MediaCard extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props;
        this.state = {
            counter: 0,
            // matchesUserData: [{
            //     name: "loading please wait...",
            //     sex: "loading please wait...",
            //     age: "loading please wait...",
            //     city: "loading please wait...",
            //     state: "loading please wait...",
            //     bio: "loading please wait..."
            // }],
            matchesUserData: this.props.matches
        }
        this.changeCounter = this.changeCounter.bind(this)
    }
    changeCounter() {
        if (this.state.counter === this.state.matchesUserData.length - 1) {
            this.setState({ counter: 0 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }

    }

    render() {
        console.log(this.state.matchesUserData.name)
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else {
            return (
                <div
                    style={{
                        paddingTop: '5%'
                    }}
                >
                    <Grid
                        container
                        justify="center"
                        alignItems="center">
                        <Card className={this.props.classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={this.props.classes.media}
                                    image="http://www.reptilegardens.com/assets/images/gallery/images/agama_copy.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {this.state.matchesUserData.name},
                                    {this.state.matchesUserData.sex},
                                    {this.state.matchesUserData.age},
                                    {this.state.matchesUserData.city + " " + this.state.matchesUserData.state}
                                    </Typography>
                                    <Typography component="p">
                                        {this.state.matchesUserData.bio}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid
                                    container
                                    alignItems="flex-end"
                                >
                                    <Button size="large" variant="contained" color="secondary">
                                        Dislike
        </Button>
                                </Grid>
                                <Button onClick={this.changeCounter} size="large" variant="contained" color="primary">
                                    Like
        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            );
        }
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);