import React, { Component } from 'react';
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/searchBox/searchBox.jsx";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }

  }
  componentDidMount = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => this.setState({
      monsters:users
    }))
  }
  onChangeText = e =>{
    this.setState({
      searchField:e.target.value
    })
  }
  render() {
    const{monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <SearchBox placeHolder='Search for Cats...' onChangeText={(e)=> this.onChangeText(e)}/>
        <CardList monsters={filterMonsters} />
       
      </div>
    );
  }
}
 export default App;