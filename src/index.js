import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root } from './components/Root/Root';
import * as theme from './config/theme';
import "./index.css";
ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <Root/>
  </ThemeProvider>
  ,
  document.getElementById('root'));