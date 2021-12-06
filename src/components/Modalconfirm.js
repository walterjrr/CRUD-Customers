import React from 'react'

import {Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,

} from '@material-ui/core'

const Modalconfirm = ({
    open,
    onClose,
    onConfirm,
    title,
    message,}) => { 

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onConfirm} autoFocus>
            confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Modalconfirm