import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service.js'
import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService()
    
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }
    
    constructor() {
        super();
        this.updatePlanet()
    }

    
    updatePlanet() {
        const id = 7
        
        this.swapiService
            .getPlanet(6)
            .then(planet => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                })
            })
    }
    
    render() {
        const {
            id,
            name,
            population,
            rotationPeriod,
            diameter,
        } = this.state
        
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` }
                     alt={`planet ${ name}`}
                />
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <output>{ population }</output>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <output>{ rotationPeriod }</output>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <output>{ diameter }</output>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
