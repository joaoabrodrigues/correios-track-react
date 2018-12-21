import React, { Component } from 'react';

import 'typeface-roboto';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class CustomAppBar extends Component {
    render() {
        return (
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Correios Tracking
          </Typography>
        </Toolbar>
      </AppBar>
    )}
}

export default CustomAppBar