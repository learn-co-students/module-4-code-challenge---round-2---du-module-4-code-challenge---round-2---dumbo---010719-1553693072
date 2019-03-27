import React, { Component } from "react";
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'
import Search from '../Components/Search'

class BeerContainer extends Component {
  state={
    allbeers: [],
    selectBeer: null,
    userInput: ''
  }

  componentDidMount(){
    fetch(' http://localhost:3001/beers')
    .then(resp => resp.json())
    .then(beers => this.setState({allbeers:beers}))
  }
 onChange= e =>{
  this.setState({userInput: e.target.value})
 }
  onClick= beerObj => {
    this.setState({selectBeer: beerObj})
  }

  filterArray = array =>{
    if(this.state.userInput === ''){
      return array
    } else return array.filter(beer =>{
      return beer.name.toLowerCase().includes(this.state.userInput.toLowerCase())
    })
  }

  render() {
    console.log(this.filterArray(this.state.allbeers))
    let arrayOfBeers = this.filterArray(this.state.allbeers).map(beer => {
      return <BeerItem  key={beer.id} beerObj={beer} onClick= {this.onClick} />
    })



    return (
      <div>
        <Search userInput={this.state.userInput}  onChange= {this.onChange}/>
        <br />
        <ul className="container">{this.state.allbeers.length > 0 ? arrayOfBeers : <h1>Loading</h1>}</ul>
        {this.state.selectBeer ? <BeerDetail beer={this.state.selectBeer}/> : <h1>Select Beer For More Info</h1>}
      </div>
    );
  }
}

export default BeerContainer;
