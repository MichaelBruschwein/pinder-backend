import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
        console.log(this.props.matches.id)
        this.state = {
            userToBeDisplayed: {
                name: "loading please wait...",
                sex: "",
                age: "",
                city: "",
                state: "",
                bio: ""
            },
            isUserOne: false,
            userId: this.props.matches.id,
            sadPuppy:false
        }
        this.likesUser = this.likesUser.bind(this)
        this.getNewMatch = this.getNewMatch.bind(this)
    }
    componentDidMount() {
        //grabs the data of all the matched users
        //change to only grab one match
        axios.post('/match', {
            id: this.state.userId
        }).then((response) => {
            console.log(response.data)
            if (response.data.message==="empty"){
                this.setState({
                    sadPuppy:true
                })
                // alert("Thats ruff, there are no more matches")
                //reroute here
            }else{
                this.setState({
                    userToBeDisplayed: response.data.userToBeDisplayed,
                    isUserOne: response.data.isUserOne
                })
            }
            
        })
    }
    likesUser(like) {
        axios.put('/like', {
            user1: this.state.userId,
            user2: this.state.userToBeDisplayed.id,
            like: like,
            isUser2: this.state.isUserOne
        }).then((response) => {
            console.log(response)
            this.getNewMatch()
            // if (response.data.message==="matched"){
            //     alert("HEY Hey hey")
            // }
        }).catch((error) => {
            console.log(error)
        })

    }
    getNewMatch(){
        axios.post('/match', {
            id: this.state.userId
        }).then((response) => {
            console.log(response.data)
            if (response.data.message==="empty"){
                this.setState({
                    sadPuppy:true
                })
                // alert("Thats ruff, there are no more matches")
                //reroute here
            }else{
                this.setState({
                    userToBeDisplayed: response.data.userToBeDisplayed,
                    isUserOne: response.data.isUserOne
                })
            }
            
        })
    }

    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        }else if(this.state.sadPuppy){
           return(<div>
               <h1> That's Ruff No New Matches Please Check Back Later</h1>
               <img src="https://i.ytimg.com/vi/R7K-crxH2J0/hqdefault.jpg"></img>
               </div>)
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

                                    {this.state.userToBeDisplayed.name},
                                    {this.state.userToBeDisplayed.sex},
                                    {this.state.userToBeDisplayed.age},
                                    {this.state.userToBeDisplayed.city + " " + this.state.userToBeDisplayed.state},
                                    {this.state.userToBeDisplayed.bio}

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