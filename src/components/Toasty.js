import { 
        Snackbar, 
} from '@material-ui/core/'

import MuiAlert from '@material-ui/lab/Alert'


const Toasty = ({ open, severity, message, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onclose()
  }

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        >
         <MuiAlert elevation={6} variant="filled" severity={severity}>
             {message} 
         </MuiAlert>
      </Snackbar>    
  )
}

export default Toasty