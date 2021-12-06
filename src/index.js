import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


import App from './App'
import './index.css'

import {green, deepPurple} from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
     main: green[900],
    }, 
    secondary: {
      main: deepPurple[900],
     }, 
  },
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

