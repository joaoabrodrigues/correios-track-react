import React, { PureComponent } from 'react'

import 'typeface-roboto'

import SendIcon from '@material-ui/icons/Send'

import Button from '@material-ui/core/Button'

import PropTypes from "prop-types"

import axios from 'axios'

class CustomButton extends PureComponent {
  constructor () {
    super()
    this.state =  {
      info: '',
      loading: false
    }
  }
  handleClick() {
    if (!this.state.loading) {
      this.setState({info: '', loading: true})

      axios.get(`http://correiostrack.joaoabrodrigues.com:8080/api/v1/track/${this.props.object}`)
           .then(response => this.setState({info: response.data, loading: false}))
    }
  }

    render() {
        return (
        <Button 
          variant="contained"
          color="primary"
          className="Button"
          disabled={((!this.props.object || /^\s*$/.test(this.props.object) || this.props.object.length < 13 || this.props.object.length > 13) || this.state.loading)}
          onClick={() => { this.handleClick() }}> 
            Rastrear
            <SendIcon className="Icon"/>
          </Button>
    )}
}

CustomButton.propTypes = {
  object: PropTypes.string
};

export default CustomButton