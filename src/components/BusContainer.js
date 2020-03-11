import React from 'react'
import Bus from './Bus'
import {getBusesPositionsSimple} from "../services/buses"

import {render} from 'react-dom';


import credentials from './credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

class BusContainer extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            buses: [],
            isFetch: true,
        }
    }
    
    async componentDidMount (){       
        //   fetch('https://cors-anywhere.herokuapp.com/https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=6e1ded6663b94c8d88c65431c50c2315&client_secret=d9d4Ca0e1Ef24cB4A87A84aeBb287660')
        //    .then(response => response.json())
        //   .then(busesJson => this.setState({buses : busesJson, isFetch: false}))
        const responseJson = await getBusesPositionsSimple()
        this.setState({ buses: responseJson, isFetch: false})
        
        
    }

    // componentDidUpdate (){

    // }

    render(){   
        const {isFetch, buses} = this.state

        if(isFetch)  {
            return "loading....."
        } 
        // const name = this.state.buses[0].route_short_name  
        // return <Bus name={name}/>
        return (
            buses.map((buses) => <Bus agency_name={buses.agency_name} name={buses.route_short_name} key={buses.id} />)
            // buses.map((buses) => <Bus name={...buses} key={buses.id} />)   asi trae todos

        )

        
    }

}

export default BusContainer