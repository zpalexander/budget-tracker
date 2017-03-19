/* React */
import React from 'react';
/* Styles */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const App = (props) => {
  return (
    <MuiThemeProvider>
      { props.children }
    </MuiThemeProvider>
  );
}

export default App;
