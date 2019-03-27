import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {

  state={
    beers:[],
    singleBeer:[],
    userInput:''
  }

  componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(res => res.json())
    .then(beers => this.setState({
      beers: beers
    }))
  }

  handleClick=(event,beer)=>{
    this.setState({
      singleBeer:beer
    })
  }

  handleChange=event=>{
    this.setState({
      userInput:event.target.value
    })
  }

  filter = array=>{
    if (this.state.userInput==='') {
      return array
    } else {
      return [...array].filter(beer=>beer.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render() {
    let beerList= this.filter(this.state.beers).map(beer=>
      <BeerItem key={beer.id} beer={beer} handleClick={this.handleClick}/>)

    return (
      <div>
        <Search input={this.state.userInput} handleChange={this.handleChange}/>
        <br />
        <ul className="container">
        {beerList}
        </ul>
        <BeerDetail singleBeer= {this.state.singleBeer}/>
      </div>
    );
  }
}

export default BeerContainer;
