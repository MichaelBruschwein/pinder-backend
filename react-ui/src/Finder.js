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
        maxWidth: 850,
    },
    media: {
        paddingTop: '56.25%',
    },
};
class MediaCard extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props;
        this.state = {
            user2: {
                name: "loading please wait...",
                sex: "loading please wait...",
                age: "loading please wait...",
                city: "loading please wait...",
                state: "loading please wait...",
                bio: "loading please wait..."
            },
            userId: this.props.matches.id
        }
        this.likesUser = this.likesUser.bind(this)
    }
    componentDidMount() {
        //grabs the data of all the matched users
        //change to only grab one match
        axios.post('/match', {
            id: this.state.userId
        }).then((response) => {
            console.log(response.data.user2)
            this.setState({
                user2: response.data.user2
            })
        })
    }
    likesUser(like) {
        console.log(this.state.userId, this.state.user2)
        axios.put('/like', {
            user1: this.state.userId,
            user2: this.state.user2.id,
            like: like
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
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

                                    {this.state.user2.name},
                                    {this.state.user2.sex},
                                    {this.state.user2.age},
                                    {this.state.user2.city + " " + this.state.user2.state},
                                    {this.state.user2.bio}

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid
                                    container
                                    alignItems="flex-end"
                                >
                                    <Button onClick={(e)=>this.likesUser(false)} size="large" variant="contained" color="secondary">
                                        Dislike
                                    </Button>
                                </Grid>
                                <Button onClick={(e)=>this.likesUser(true)} size="large" variant="contained" color="primary">
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
//Make a axios post call to database to create and search for matches
//We get a response from database and setstate of matches to equal the ids from database
//