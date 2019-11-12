import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SendIcon from '@material-ui/icons/Send';

import axios from 'axios'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
    },
    typography: {
      useNextVariants: true,
    },
});

class App extends Component {
  constructor () {
    super()
    let objectUrl = new URLSearchParams(window.location.search).get('object')

    objectUrl = objectUrl && objectUrl.length === 13 && /^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(objectUrl) ? objectUrl : null

    this.state =  {
      info: '',
      object: objectUrl ? objectUrl : '',
      loading: true,
      isUrl: true
    }

    if (objectUrl) {
      this.handleClick()
    } else {
      this.state.loading = false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = object => event => {
    this.setState({
      [object]: event.target.value,
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter' && !(!this.state.object || !/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(this.state.object) || this.state.object.length !== 13 ) && !this.state.loading) {
      this.handleClick();
    }
  };

  handleClick() {
    if (!this.state.loading || this.state.isUrl) {
      this.setState({info: '', loading: true})

      axios.get(`https://correiostrackssl.joaorodrigues.dev/v1/tracking/${this.state.object}`)
           .then(response => this.setState({info: response.data, loading: false}))
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Correios Tracking
              </Typography>
            </Toolbar>
          </AppBar>

          <div className="Margin">
            <TextField
              id="track-object"
              label="Objeto"
              type="text"
              margin="normal"
              helperText="Exemplo: AB123456789BR"
              onChange={this.handleChange('object')}
              onKeyPress={this.handleKeyPress}
              value={this.state.object}
              inputProps={{
                maxLength: 13,
              }}
            />
            <Button 
              variant="contained"
              color="primary"
              className="Button"
              disabled={(!this.state.object || !/^[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}/.test(this.state.object) || this.state.object.length !== 13) || this.state.loading}
              onClick={() => { this.handleClick() }}> 
                Rastrear
                <SendIcon className="Icon"/>
              </Button>
            </div>

            { this.state.info &&
              <Chip className="Margin" color="primary" label={"Rastreamento de Objeto - " + this.state.info.objeto[0].numero} />
            }

            { this.state.info && (!this.state.info.objeto[0].categoria || !this.state.info.objeto[0].categoria.includes("ERRO")) &&
                <Table className="TableSize">
                  <TableHead>
                    <TableRow>
                      <TableCell className="CellPadding" component="th" scope="row"><strong>Data / Hora</strong></TableCell>
                      <TableCell className="CellPadding" component="th" scope="row"><strong>Status / Localidade</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { this.state.info && 
                      this.state.info.objeto[0].evento.map(evento => {
                        return (
                          <TableRow key={evento.tipo + evento.criacao}>
                            <TableCell className="TableColor CellPadding">{evento.data + ' ' + evento.hora}</TableCell>
                              <Table>
                                <TableBody>
                                  <TableRow className="TableColor" key={evento.tipo + evento.descricao}>
                                    <TableCell className="CellPadding"><strong>{evento.descricao}</strong></TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                              <Table>
                                <TableBody>
                                  <TableRow key={evento.tipo+evento.destino}>
                                  { !evento.destino &&
                                    <TableCell className="CellPadding">
                                      <strong>Local:</strong> { evento.unidade.local + ' - ' + evento.unidade.cidade + '/' + evento.unidade.uf + ' - ' + evento.unidade.tipounidade }
                                    </TableCell>
                                  }
                                  { evento.destino &&
                                    <TableCell className="Origem CellPadding">
                                      <strong>Origem:</strong> { evento.unidade.local + ' - ' + evento.unidade.cidade + '/' + evento.unidade.uf + ' - ' + evento.unidade.tipounidade}
                                    </TableCell>
                                  }
                                  { evento.destino &&
                                    <TableCell className="CellPadding">
                                      <strong>Destino:</strong> { evento.destino[0].local + ' - ' + evento.destino[0].cidade + '/' + evento.destino[0].uf }
                                    </TableCell>
                                  }
                                  </TableRow>
                                </TableBody>
                              </Table>
                          </TableRow>
                        );})
                      }
                  </TableBody>
                </Table>
            }

            { this.state.info && this.state.info.objeto[0].categoria && this.state.info.objeto[0].categoria.includes("ERRO") &&
                <div>Objeto não encontrado na base de dados dos Correios!</div>
            }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
