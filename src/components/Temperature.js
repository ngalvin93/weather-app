import React, { Component } from 'react'
import axios from 'axios'
import './Temperature.css'

export class Temperature extends Component {

    state = {
        temp: null,
        loading: false,
        unit: true
    }

    componentDidMount() {
        this.setState({ loading: true })
        navigator.geolocation.getCurrentPosition((location)=> {
            const latitude = Math.floor(location.coords.latitude)
            const longitude = Math.floor(location.coords.longitude)
            axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
                .then(res => {
                    console.log('fetched data', res.data)
                    this.setState({ temp: Math.floor(res.data.main.temp) })
                    console.log('state temp',this.state.temp)
                    this.setState({ loading: false })
                })
        })
    }

    switchUnit = () => {
        console.log('before clicking', !this.state.unit)
        this.setState({ unit: !this.state.unit })
        console.log(!this.state.unit ? 'ITS TRUE' : 'NAH FALSE')
        this.setState({ temp: this.state.unit ? Math.floor(this.state.temp * 9 / 5 + 32) : Math.floor((this.state.temp - 32) * 5 / 9) })
        console.log('THIS TEMP SAVED TO STATE',this.state.temp)
    }

    render() {
        return (
            <div id='unit-btn'>
                <p onClick={ this.switchUnit }>{ this.state.loading ? 'WAITING' : this.state.temp }</p>
            </div>
        )
    }
}

export default Temperature
