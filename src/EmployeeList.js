import React, { Component } from 'react'

import Employee from './Employee'

class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
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
                console.log(this.state.employees)
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
                {/*Render Employee component here as list*/}
                {this.state.employees.map(employee => {
                    console.log(employee)
                    return (
                        <div key={employee.id}>
                            <h2></h2>
                            <Employee {...employee} />
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default EmployeeList