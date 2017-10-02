import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import DeleteIcon from 'material-ui-icons/Delete';

class App extends Component {
  handleClick = ()=> {
    alert("Clicked!");
  }

  render() {
    return (
      <div>
        <div>
          {/* クリックイベントの処理はこんな感じ */}
          <Button onClick={this.handleClick}>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="accent"><DeleteIcon />削除</Button>
        </div>
        <div>
          <Button raised>Default</Button>
          <Button raised color="primary">Primary</Button>
          <Button raised color="accent"><DeleteIcon />削除</Button>
        </div>
        <div>
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
          <Button fab color="accent" aria-label="edit">
            <ModeEditIcon />
          </Button>
        </div>
        <div>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default App;
