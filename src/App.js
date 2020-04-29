import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Table from './Table/Table';

class App extends Component {
  state = {
    fruits : []
  }
  inputHandler = (event) => {
      event.preventDefault();
      const inputText = event.target[0].value;      
      let data = inputText.split('-');
      event.target[0].value = '';
      let fruits = [...this.state.fruits];
      fruits.push({key:Math.floor(Math.random()*30),name:data[0],qty:data[1]});
      this.setState({fruits: fruits});      
  }

  deleteHandler = (pos) => {
    const index = this.state.fruits.findIndex((currentIndex) => currentIndex.key === pos);
    let fruits = [...this.state.fruits];
    fruits.splice(index, 1);
    this.setState({
      fruits: fruits
    })
  }

  render() {

    let fruits = (
      this.state.fruits.map((fruit) => {
        return (
          <table>
            <Table deleteHandler={this.deleteHandler} name={fruit.name} qty={fruit.qty} index={fruit.key}/>
          </table>
        )
      })
    )
    return (
      <div className="App">
         <Form changed = {this.inputHandler} />
        {fruits}
      </div>
    );
  }

 
}
export default App;
