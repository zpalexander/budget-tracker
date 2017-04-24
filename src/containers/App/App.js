/* React */
import React from 'react';
/* Styles */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const App = (props) => {
  return (
    <MuiThemeProvider>
        <div>{ props.children }</div>
    </MuiThemeProvider>
  );
}

export default App;
