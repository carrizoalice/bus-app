import React from 'react'
import Bus from './Bus'
import {getBusesPositionsSimple} from "../services/buses"
import {render} from 'react-dom';

import {Map, Marker, Popup, TileLayer } from "react-leaflet";
//import {Icon } from "leaflet";
import useSwr from "swr"; //es una extension para ir a buscar datos remotos usando hooks y swr

import "../bus.css";

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function BusContainer(){

        const url = "https://cors-anywhere.herokuapp.com/https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=6e1ded6663b94c8d88c65431c50c2315&client_secret=d9d4Ca0e1Ef24cB4A87A84aeBb287660";
        const {data, error} = useSwr(url, fetcher);
        const colectivos = data && !error ? data.slice(0, 500) : [];
        const [activeColectivo, setACtiveColectivo] = React.useState(null);

        return (
            <Map center={[-34.5987644, -58.42873]} zoom={12}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
                />
            
            {colectivos.map( colectivo =>
                <Marker
                key={colectivo.id} 
                position={[colectivo.latitude, colectivo.longitude]}                
                onClick={() =>{
                    setACtiveColectivo(colectivo);
                }}
                    /> 
                )}

                {activeColectivo && (
                <Popup 
                position={[
                    activeColectivo.latitude, 
                    activeColectivo.longitude
                    ]}

                onClose={() =>{setACtiveColectivo(null);
                }}
                >
                    <div>{activeColectivo.route_short_name}</div> 
                </Popup>
                )}
            </Map>
        ) 
    }


