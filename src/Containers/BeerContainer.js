import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'



class BeerContainer extends Component {

  state = {
    beers: [],
    details: {},
    searchTerm: "",
    filterBeers: []

  }

  componentDidMount() {
    fetch('http://localhost:3001/beers')
    .then(resp => resp.json())
    .then(beers => this.setState( { beers: beers, filterBeers: beers } ))
  }

  handleClick = (beerObj) => {
    this.setState( { details: beerObj} )

  }


  changeHandler = (event) => {
    const term = event.target.value
    const copyOfBeers = [...this.state.beers]
    const filterBeers = copyOfBeers.filter(beerObj => beerObj.name.toLowerCase().includes(term.toLowerCase()))
    this.setState( { filterBeers: filterBeers, searchTerm: term } )
  }






  render() {
    console.log(this.state) //----> check the render of the object
    const { beers, details, searchTerm, filterBeers } = this.state
    const renderBeers = filterBeers.map(beerObj =>
      <BeerItem
      key={ beerObj.id }
      beer={ beerObj }
      handleClick={ this.handleClick }
      />)
    return (
      <div>
        <Search changeHandler={ this.changeHandler } value={ searchTerm } />
        <br />
        <ul className="container">{ renderBeers }</ul>
        <BeerDetail beers={ details } />
      </div>
    );
  }
}

export default BeerContainer;
