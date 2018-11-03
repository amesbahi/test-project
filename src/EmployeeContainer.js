import React, { Component } from 'react'

import Employees from './Employees'

class EmployeeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            isHidden: true
        }

        this.randomEmployees = []
        this.randomEmployee = []

        this.clickPlay = this.clickPlay.bind(this)
        this.generateRandomEmployees = this.generateRandomEmployees.bind(this)
    }

    // generate random list of employees
    generateRandomEmployees() {
        // select a random employee
        this.randomEmployee = this.state.employees[Math.floor(Math.random() * this.state.employees.length)]
        console.log(this.randomEmployee)

        // create array to hold random employees, including the selected one
        const randomEmployeesArr = []

        // Add the random employee to the array
        randomEmployeesArr.push(this.randomEmployee)

        // shuffle employees from state and add 4 into randomEmployees array
        for (var i = 0; randomEmployeesArr.length <= 4; i++) {
            let randomIndex = Math.floor(Math.random() * this.state.employees.length),
                element = this.state.employees.splice(randomIndex, 1)
            randomEmployeesArr.push(element[0])
        }

        console.log(randomEmployeesArr)

        // shuffle the randomEmployees array before rendering
        const shuffledRandomEmployees = []

        for (var j = 0; shuffledRandomEmployees.length <= 4; j++) {
            let randomIndex = Math.floor(Math.random() * randomEmployeesArr.length),
                element = randomEmployeesArr.splice(randomIndex, 1)
            shuffledRandomEmployees.push(element[0])
        }

        console.log(shuffledRandomEmployees)
        this.randomEmployees = shuffledRandomEmployees
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
                console.log(this.state)
                this.generateRandomEmployees()
                console.log(this.randomEmployees)
                this.setState({ isHidden: false })
            })
            .catch(error => {
                console.log('Error fetching and parsing requested data', error)
            })
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.clickPlay}>Begin Play</button>
                {this.state.isHidden === false ? <Employees randomEmployees={this.randomEmployees} randomEmployee={this.randomEmployee} /> : null}
            </div>
        )
    }

}

export default EmployeeContainer