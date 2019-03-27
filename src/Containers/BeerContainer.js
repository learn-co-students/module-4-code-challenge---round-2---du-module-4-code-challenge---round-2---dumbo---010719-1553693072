import React, { Component } from "react";
import Search from "../Components/Search"
import BeerDetail from "../Components/BeerDetail"
import BeerItem from "../Components/BeerItem";

class BeerContainer extends Component {

    state = {
        beers: [],
        filteredBeers: [],
        searchInput: "",
        clickedBeer: {}
    }

    componentDidMount() {
        fetch(' http://localhost:3001/beers')
            .then(resp => resp.json())
            .then(beers => {
                this.setState({
                    beers: beers,
                    filteredBeers: beers
                })
            })
    }

    clickHandler = (beerObj) => {
        console.log("click from beer list", beerObj)
        this.setState({
            clickedBeer: beerObj
        })
    }

    searchChangeHandler = (e) => {
        let newArray = [...this.state.beers].filter(input => input.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
            filteredBeers: newArray,
            searchInput: e.target.value
        })
    }

    render() {
        let beersArray = [...this.state.filteredBeers].map(beer => <BeerItem clickHandler={this.clickHandler} key={beer.id} beer={beer}/>)
    return (
      <div>
          <h1>Beers</h1>
        <Search searchChangeHandler={this.searchChangeHandler}/>
        <br />
        <ul className="container">{beersArray}</ul>
        <BeerDetail clickedBeer={this.state.clickedBeer}/>
      </div>
    );
  }
}

export default BeerContainer;
