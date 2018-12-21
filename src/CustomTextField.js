import React, { PureComponent } from 'react';

import 'typeface-roboto';

import TextField from '@material-ui/core/TextField';

import PropTypes from "prop-types";

import axios from 'axios'

class CustomTextField extends PureComponent {
  constructor () {
    super()
    this.state =  {
      info: '',
      object: '',
      loading: false
    }
  }

  handleChange = event => {
    this.setState({
      object: event.target.value,
    });
    this.props.textChange(event, '')
  };

  handleKeyPress = event => {
    if (event.key === 'Enter' && !(!this.state.object || /^\s*$/.test(this.state.object) || this.state.object.length < 13 || this.state.object.length > 13) && !this.state.loading) {
        axios.get(`http://correiostrack.joaoabrodrigues.com:8080/api/v1/track/${this.state.object}`)
             .then(response => {
               this.setState({info: response.data, loading: false})
               this.props.textChange(response.data)
              })
        
    }
  };

  render() {
    return (
    <TextField
      id="track-object"
      label="Objeto"
      type="text"
      margin="normal"
      helperText="Exemplo: AA123456789BR"
      onChange={this.handleChange}
      onKeyPress={this.handleKeyPress}
      inputProps={{
        maxLength: 13,
      }}
    />)
  }
}

CustomTextField.propTypes = {
  textChange: PropTypes.func
};

export default CustomTextField