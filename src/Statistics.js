import React, { Component } from 'react';

export default class Statistics extends Component {     
    state = {
        people: [],
        planets: [],
        films: [],
        species: [],
        vehicles: [],
        starships: []
    };


    componentDidMount(){
        Promise.all([
            fetch(`https://swapi.dev/api/people/`),
            fetch(`https://swapi.dev/api/planets/`),
            fetch('https://swapi.dev/api/films/'),
            fetch('http://swapi.dev/api/species/'), 
            fetch('http://swapi.dev/api/vehicles/'), 
            fetch('http://swapi.dev/api/starships/') 
        ])
        .then(([res1, res2, res3, res4, res5, res6]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()]))
        .then(([data1, data2, data3, data4, data5, data6]) => this.setState({
            people: data1, 
            planets: data2,
            films: data3,
            species: data4,
            vehicles: data5,
            starships: data6
        })); 
        
    }
    
    render () {
        console.log(this.state.films, this.state.planets);
        const {people, planets, films, species, vehicles, starships} = this.state;
        return (
           
              <div>
                  <h1>Statistics</h1>
                  <p>People: {people.count}</p>
                  <p>Planets: {planets.count}</p> 
                  <p>Films: {films.count}</p> 
                  <p>Species: {species.count}</p> 
                  <p>Vehicles: {vehicles.count}</p> 
                  <p>Starships: {starships.count}</p>  
              </div> 
             
                
           
        )
      }
}