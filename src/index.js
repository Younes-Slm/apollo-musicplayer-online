import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import theme from './theme';
import client from './graphql/client';

//import { CssBaseline } from '@material-ui/core';
//import  CssBaseline  from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
