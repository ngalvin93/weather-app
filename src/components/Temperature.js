import React, { Component } from 'react'
import axios from 'axios'

export class Temperature extends Component {

    state = {
        temp: null,
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        navigator.geolocation.getCurrentPosition((location)=> {
            const latitude = Math.floor(location.coords.latitude)
            const longitude = Math.floor(location.coords.longitude)
            axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
                .then(res => {
                    console.log('fetched', res.data)
                    this.setState({temp: res.data.main.temp})
                    console.log('temp',this.state.temp)
                    this.setState({ loading: false })
                })
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.loading ? 'WAITING' : this.state.temp}</p>
            </div>
        )
    }
}

export default Temperature
