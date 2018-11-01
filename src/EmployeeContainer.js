import React, { Component } from 'react'

import Employees from './Employees'

class EmployeeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            randomEmployees: []
        }

        this.clickPlay = this.clickPlay.bind(this)
    }

    clickPlay() {
        fetch('https://willowtreeapps.com/api/v1.0/profiles/')
            // take the response from the API and return a JSON object
            .then(response => response.json())
            // pass data in JSON format to next promise
            .then(responseData => {
                this.setState({
                    employees: responseData
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing requested data', error)
            })
    }

    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li onClick={this.clickPlay}>Begin Play</li>
                    </ul>
                </nav>
                <Employees {...this.state} />
            </div>
        )
    }

}

export default EmployeeContainer