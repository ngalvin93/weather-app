import React, { Component } from 'react'
import axios from 'axios'

export class Temperature extends Component {

    state = {
        data: null
    }

    componentDidMount() {
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
            </div>
        )
    }
}

export default Temperature
