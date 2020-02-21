import React, { Component } from 'react'
import axios from 'axios'

export class Temperature extends Component {

    state = {
        data: null,
        location: null
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((location)=> this.setState({location: location}))
        console.log('fetching')
        axios.get('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
            .then(res => {
                this.setState({data: res})
                console.log('the fetched data',res)
            })
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
