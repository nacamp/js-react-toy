import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FullScreenDialogClass from './DialogClass';

class ParentClass extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.onClickOpen}>
          Open full-screen dialog class
        </Button>
        <FullScreenDialogClass isOpen={open} handleClose={this.handleClose} />
      </div>

    );
  }
}
export default ParentClass;
