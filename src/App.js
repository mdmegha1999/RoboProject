import React from 'react';
//import Card from './Card';
import CardList from './CardList';
import './App.css';
import SearchBox from './SearchBox';
//import robots from './data';
class App extends React.Component{
  constructor(){
    super();
    this.state = {robots : [],searchField : '',}
    console.log('Constructor is running,,,,,')
  
}
//this is a mother function
onInputChange = async(val) => {
  await this.setState({searchField : val})
  console.log(this.state.searchField);
}
componentDidMount = () => {
  console.log("Component Did Mount is running");
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({robots : users})//// console.log(users);
      })
}


render(){
  

  const {robots, searchField} = this.state;

  const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  if (!robots.length) {    // robots.length === 0  means we want to run
    return <h1>Loading.......</h1>
  }
   


//class base component
//class App extends React.Component{
 // render(){
    return (
      <div className="tc">
        <h1>Robot Project</h1>
        <SearchBox onInputChange={this.onInputChange}/>
        
      <CardList robots={filteredRobots}/>
      </div>
    );
 } 
}


export default App;
