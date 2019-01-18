import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class AlertDialogSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      buttonName: this.props.buttonName,
      title: this.props.title,
      dialog: this.props.dialog,
      confirm: this.props.confirm,
      deny: this.props.deny,
      buttonType: this.props.buttonType
    };
  }

//for opening the dialog
  handleClickOpen = () => {
    this.setState({ open: true });
  };
//just for closing the dialog
  handleClose = () => {
    this.setState({ open: false });
  };

  handleDeny = () => {
    this.handleClose()

  };

  handleConfirm = () => {
    this.props.action(this.props.user)
    this.handleClose()
  };



  render() {
    return (
      <div>
        <Button variant="contained" color={this.props.buttonType} onClick={this.handleClickOpen}>
          {this.state.buttonName}
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {this.state.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.state.dialog}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDeny} variant="contained" color="secondary">
              {this.state.deny}
            </Button>
            <Button onClick={this.handleConfirm} variant="contained" color="primary">
              {this.state.confirm}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
