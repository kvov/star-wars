import React, { useState, useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  const requestData = useCallback((url = 'https://swapi.dev/api/planets/?page=1') => (
    fetch(url)
      .then(async res => {
        const response = await res.json();
        setPlanets(prevState => prevState.concat(response.results));
        if (response.next) {
          requestData(response.next.replace("http://", "https://"));
        } 
      }).catch(err => {
        throw err;
      })
  ), []);

  useEffect(() => {
    requestData();
  }, [requestData]);

    return (
       
          <div className="planets">
              <h1 className="planets_heading">PLANETS</h1>
              <div className="planet">
              {planets.map((planet, idx) => {
                  return (
                    <p key={planet.name}> <Link to={`/${idx + 1}`}>{planet.name}</Link></p>
                  )
              })}
              </div>
              <div className="stats">
                <Link to="/statistics">Statistics</Link>
              </div>
          </div> 
         
            
       
    )

}