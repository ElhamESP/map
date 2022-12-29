import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

//var myMap;

const searchControl = new SearchControl({
    provider: new OpenStreetMapProvider(),
    style: 'button',
});

function LocationMarker() {

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
    map.addControl(searchControl);
  /*  myMap = map
    for (let i = 0; i < 100000; i++) {
        map.flyTo([1 + (i / 100000), 200 - (i / 100000)])

    }*/


    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

function App() {

    const [x, setX] = useState(36.29749773823067);
    const [y, setY] = useState(59.605939284956875);

    useEffect(() => {
        axios.get("https://api.neshan.org/v1/search?term=Mashhad&lat=0.1&lng=0.2", {
            headers: {
                "Api-Key": "service.375cae10c94641f78a29aaa64babccd4",
            }
        })
            .then((res) => {
                setX(res.data.items[10].location.y)
                setY(res.data.items[10].location.x)
            })
            .catch((err) => console.log("err"));
    }, []);


    return (

        <MapContainer center={{lat:x,lng:y}} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>

    );
}

export default App;
