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
            counter: 0,
            matchesFound:1,
            // userId: [{
            //     name: "loading please wait...",
            //     sex: "loading please wait...",
            //     age: "loading please wait...",
            //     city: "loading please wait...",
            //     state: "loading please wait...",
            //     bio: "loading please wait..."
            // }],
            userId: this.props.matches.id
        }
        this.likesUser = this.likesUser.bind(this)
    }
    componentDidMount(){
        //grabs the data of all the matched users
        //change to only grab one match
        axios.post('/match',{
            id:this.state.userId
        }).then((response)=>{
            console.log(response)
            axios.get(`/user/${response.data[0]}`)
            .then((response)=>{
                console.log(response)
                this.setState({
                    userId:this.state.userId,
                    matchesFound:response.data
                })
            })
        })
    }
    likesUser() {
        console.log(this.state.userId,this.state.matchesFound)
        axios.put('/like',{
            user1:this.state.userId,
            user2:this.state.matchesFound.id
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else if(this.state.matchesFound.length === 0){
            return <div><h1> no matches found try refreshing page</h1></div>
        }else{
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
                                        {this.state.matchesFound.name},
                                    {this.state.matchesFound.sex},
                                    {this.state.matchesFound.age},
                                    {this.state.matchesFound.city + " " + this.state.matchesFound.state}
                                    </Typography>
                                    <Typography component="p">
                                        {this.state.matchesFound.bio}
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
                                <Button onClick={this.likesUser} size="large" variant="contained" color="primary">
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