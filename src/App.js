import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles'; //追加

const styles = {
  box: {
    margin: 10,
    padding: 10,
    border: "solid 1px gray",
  },
  button: {
    margin: 10,
  },
  buttonWithHover: {
    margin: 10,
    // hoverも記述できる
    '&:hover': {
      backgroundColor: '#ff0000',
    }
  },
};

class App extends Component {
  handleClick = ()=> {
    alert("Clicked!");
  }

  render() {
    // 長くなるので参照
    const classes = this.props.classes;
    return (
      <div>
        <div className={classes.box}>
          {/* クリックイベントの処理はこんな感じ */}
          <Button onClick={this.handleClick} className={classes.button}>Default</Button>
          <Button color="primary" className={classes.buttonWithHover}>Primary</Button>
          <Button color="accent"><DeleteIcon />削除</Button>
        </div>
        <div className={classes.box}>
          <Button raised className={classes.button}>Default</Button>
          <Button raised color="primary" className={classes.button}>Primary</Button>
          <Button raised color="accent" className={classes.button}><DeleteIcon />削除</Button>
        </div>
        <div className={classes.box}>
          <Button fab color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
          </Button>
          <Button fab color="accent" aria-label="edit" className={classes.button}>
            <ModeEditIcon />
          </Button>
        </div>
        <div className={classes.box}>
          <IconButton aria-label="Delete" className={classes.button}>
            <DeleteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Add to shopping cart" className={classes.button}>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
