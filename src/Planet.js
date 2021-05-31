import React from 'react';

export default class Planet extends React.Component {
    state = {
        planet: [],
        residents: [],
        films: []     
      }
    
    componentDidMount() {
      
            fetch(`https://swapi.dev/api/planets/${this.props.match.params.id}/`)
            .then((res) => res.json())
            .then(async (data) => {this.setState({ planet: data})
                 let newResidentArray = data.residents.map(async (resident) => {
                    console.log(resident)
                    const res = await fetch(resident);
                    return await res.json();
                })
                let newFilmArray = data.films.map(async (film) => {
                    console.log(film)
                    const res = await fetch(film);
                    return await res.json();
                })
                let allPromise = Promise.all(newResidentArray)
                console.log(allPromise)
                const residents = await allPromise;
                this.setState({ residents: residents });
                const films = await Promise.all(newFilmArray);
                this.setState({ films: films });
                
            })
            
    };
   
            
    render() {
        return (
            <div>
                <h1>{this.state.planet.name}</h1>
                <p><b>Diameter:</b> {this.state.planet.diameter}</p>
                <p><b>Rotation period:</b> {this.state.planet.rotation_period}</p> 
                <p><b>Orbital period:</b> {this.state.planet.orbital_period}</p>
                <p><b>Gravity:</b> {this.state.planet.gravity}</p>
                <p><b>Population:</b> {this.state.planet.population}</p>
                <p><b>Climate:</b> {this.state.planet.climate}</p>
                <p><b>Terrain:</b> {this.state.planet.terrain}</p>
                <p><b>Surface water:</b> {this.state.planet.surface_water}</p>
                <p><b>Residents:</b> {this.state.residents.map((resident) => {
                    return (
                        <li key={resident.name}>{resident.name}</li>
                    )
                })}</p>
                <p><b>Films:</b> {this.state.films.map((film) => {
                    return (
                        <li key={film.episode_id}>{film.title}</li>
                    )})}</p>
                <p><b>URL:</b> {this.state.planet.url}</p>
                <p><b>Created:</b> {this.state.planet.created}</p>
                <p><b>Edited:</b> {this.state.planet.edited}</p>    
            </div>
        )
    }    
}
