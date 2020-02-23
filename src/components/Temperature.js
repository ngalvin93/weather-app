import React, { Component } from 'react'
import axios from 'axios'

export class Temperature extends Component {

    state = {
        data: null,
        latitude: null,
        longitude: null
    }

    componentDidMount() {
        // function getGeolocation () {
        //     return new Promise(function (resolve, reject) {
        //         navigator.geolocation.getCurrentPosition((geolocation) => {
        //             // this.setState({ latitude: geolocation.coords.latitude, longitude: geolocation.coords.longitude})
        //             resolve([geolocation.coords.latitude, geolocation.coords.longitude])
        //         })
        //     })
        // }

        // function fetchWeather (geolocation) {
        //     console.log('fetch weather', geolocation)
        //     return new Promise(function (resolve, reject) {
        //         axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${Math.floor(this.state.latitude)}&lon=${Math.floor(this.state.longitude)}`)
        //             .then(res => {
        //                 console.log('response',res)
        //                 resolve(res)
        //             })
        //     })
        // }

        // getGeolocation()
        //     .then(fetchWeather)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location)=> {
                this.setState({latitude: location.coords.latitude, longitude: location.coords.longitude})
                console.log('the location', this.state.latitude, this.state.longitude)
            })
        } else {
            console.log('Geolocation not found')
        }
        // axios.get('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
        //     .then(res => {
        //         this.setState({data: res})
        //         console.log('the fetched data',res)
        //         //console.log('the location', this.state.location)
        //     })
    }

    render() {
        return (
            <div>
                <p>TEMPERTURE COMPONENT</p>
                {/* <p>{ this.state.location ? this.state.location : 'NO DATA' }</p> */}
            </div>
        )
    }
}

export default Temperature
