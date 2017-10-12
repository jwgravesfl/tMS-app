import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Footer from './Footer';
import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import AccountsWrapper from './AccountsWrapper';


export default class App extends Component {
  render(){
    return (
      <MuiThemeProvider>

        <div className="container">

          <AppBar
            title="App Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
            <AccountsWrapper />
          </AppBar>

          <div className="row">
            <div className="col s12 m12"><Header /></div>
            <div className="col s12 m12"><Page1 /></div>
            <div className="col s12 m12"><Page2 /></div>
            <div className="col s12 m12"><Footer /></div>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}
