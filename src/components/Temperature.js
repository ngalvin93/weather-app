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
                    console.log('fetched', res.data)
                    let cTemp = res.data.main.temp
                    console.log(cTemp, 'C')
                    let fTemp = cTemp * 9 / 5 + 32
                    console.log(fTemp, 'F')
                    this.setState({temp: res.data.main.temp})
                    console.log('temp',this.state.temp)
                    this.setState({ loading: false })
                })
        })
    }

    switchUnit = (e) => {
        console.log('clicked', e.target.innerHTML)
        this.setState({ unit: !this.state.unit })
        console.log('UNIT',this.state.unit)
    }

    render() {
        return (
            <div id='unit-btn'>
                <p onClick={ this.switchUnit }>{this.state.loading ? 'WAITING' : this.state.temp}</p>
            </div>
        )
    }
}

export default Temperature
