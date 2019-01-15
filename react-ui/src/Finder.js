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
import axios from 'axios'


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
            matchesUserData: [{
                name: "loading please wait...",
                sex: "loading please wait...",
                age: "loading please wait...",
                city: "loading please wait...",
                state: "loading please wait...",
                bio: "loading please wait..."
            }]
        }
    }
    // componentDidMount() {
    //     axios.get('/findPets', {
    //         sex: "Male"
    //     })
    //         .then((response) => {
    //             this.setState({ matchesUserData: response.data })
    //             console.log(this.state.matchesUserData)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else {
            return (
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
                                    {this.checkForData}
                                    {this.state.matchesUserData[0].name},
                                    {this.state.matchesUserData[0].sex},
                                    {this.state.matchesUserData[0].age},
                                    {this.state.matchesUserData[0].city + " " + this.state.matchesUserData[0].state}
                                </Typography>
                                <Typography component="p">
                                    {this.state.matchesUserData[0].bio}
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
                            <Button size="large" variant="contained" color="primary">
                                Like
        </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);