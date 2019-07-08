import React from 'react'
import { withStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from "@material-ui/icons";

export class InputCity extends React.Component {
    state = {
      inputValue: ""
    };
  
    render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Insira aqui o nome na cidade"
            inputProps={{ "aria-label": "Insira aqui o nome na cidade" }}
            onChange={e => this.handleInputChange(e)}
          />
          <IconButton
            onClick={() => this.handlerInput()}
            className={classes.iconButton}
            aria-label="Search"
          >
            <Search />
          </IconButton>
        </Paper>
      );
    }
  
    handlerInput() {
      this.props.handlerInput(this.state.inputValue);
    }
  
    handleInputChange(event) {
      const value = event.target.value;
      this.setState({
        inputValue: value
      });
    }
  }

  const styles = ({
    root: {
        padding:'2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
    },
    input: {
        marginLeft: 8,
        flex: 1
    },
    iconButton:{
        padding: 10
    }
})

export default withStyles(styles)(InputCity)