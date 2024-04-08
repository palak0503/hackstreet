import React, { Component, useState, createRef } from 'react'
import Header from '../components/Header'
import tt from "@tomtom-international/web-sdk-maps"
import "@tomtom-international/web-sdk-maps/dist/maps.css"
import { services } from '@tomtom-international/web-sdk-services'
import '../cssFiles/FindHome.css'

const API_KEY = "Wxjc846YDgHe8OcA9A7J7dHj8EH9UnIb";
const SAN_FRANCISCO = [-122.4194, 37.7749];

export default class FindHome extends Component {

    constructor(props) {
        super(props);
    
        this.mapRef = createRef();
      }

    componentDidMount() {
        this.map = tt.map({
          key: API_KEY,
          container: this.mapRef.current,
          center: SAN_FRANCISCO,
          zoom: 12
        })
      }

      render() {
        return (
          <div>
            <Header />
            <h1>Find Home</h1>
            <input type="text"></input>
            <button onClick="">Enter Zipcode</button>
            <div ref={this.mapRef} className="mapDiv"></div>
          </div>
        );
        }
}