import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FullScreenDialog from './Dialog';

export default function Parent() {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onClickOpen}>
        Open full-screen dialog
      </Button>
      <FullScreenDialog isOpen={open} handleClose={handleClose} />
    </div>

  );
}
