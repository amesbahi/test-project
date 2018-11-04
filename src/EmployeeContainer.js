import React, { Component } from 'react'

import Employees from './Employees'

class EmployeeContainer extends Component {
    constructor(props) {
        super(props)

        // Holds the state for employees retreived from API; hidden state for
        // Employees child until the user clicks the play button; the number of
        // correct and incorrect guesses made, populated by the updateCorrect
        // and updateIncorrect methods that are called when the user clicks the
        // employee image on the child Employees component. Correct and incorrect
        // state is populated by the correct- and incorrectArray props
        this.state = {
            employees: [],
            isHidden: true,
            correct: [],
            incorrect: []
        }

        // Props to hold the number of correct and incorrect guesses that are
        // made when the user clicks on the employee image. These are used in 
        // the updateCorrect and updateIncorrect methods called from the child
        // component
        this.correctArray = []
        this.incorrectArray = []

        // Props to hold a shuffled array of random employees as well as one
        // singular random employee: the one the user must guess
        this.randomEmployees = []
        this.randomEmployee = []

        this.clickPlay = this.clickPlay.bind(this)
        this.generateOneRandomEmployee = this.generateOneRandomEmployee.bind(this)
        this.generateRandomEmployees = this.generateRandomEmployees.bind(this)
        this.updateCorrectState = this.updateCorrectState.bind(this)
        this.updateIncorrectState = this.updateIncorrectState.bind(this)
    }

    // generate one random employee
    generateOneRandomEmployee() {
        // select a random employee
        this.randomEmployee = this.state.employees[Math.floor(Math.random() * this.state.employees.length)]
        console.log(this.randomEmployee)
        return this.randomEmployee
    }

    // generate random list of employees
    generateRandomEmployees() {
        // create array to hold random employees, including the selected one
        const randomEmployeesArr = []

        // Add the random employee to the array
        randomEmployeesArr.push(this.generateOneRandomEmployee())

        // shuffle employees from state and add 4 into randomEmployees array
        for (var i = 0; randomEmployeesArr.length <= 4; i++) {
            let randomIndex = Math.floor(Math.random() * this.state.employees.length)
            let element = this.state.employees.splice(randomIndex, 1)
            console.log(element)
            randomEmployeesArr.push(element[0])
        }

        console.log(randomEmployeesArr)

        // shuffle the randomEmployees array before rendering
        const shuffledRandomEmployees = []

        for (var j = 0; shuffledRandomEmployees.length <= 4; j++) {
            let randomIndex = Math.floor(Math.random() * randomEmployeesArr.length)
            let element = randomEmployeesArr.splice(randomIndex, 1)
            shuffledRandomEmployees.push(element[0])
        }

        console.log(shuffledRandomEmployees)
        this.randomEmployees = shuffledRandomEmployees
    }

    updateCorrectState() {
        this.correctArray.push(this.correctArray.length + 1)
        this.setState({
            correct: this.correctArray
        })
        return this.state.correct.length
    }

    updateIncorrectState() {
        this.incorrectArray.push(this.incorrectArray.length + 1)
        this.setState({
            incorrect: this.incorrectArray
        })
        return this.state.incorrect.length
    }

    clickPlay() {
        fetch('https://willowtreeapps.com/api/v1.0/profiles/')
            // take the response from the API and return a JSON object
            .then(response => response.json())
            // pass data in JSON format to next promise
            .then(responseData => {
                // filter out past employees from state
                let filteredResponse = responseData.filter((employee) => {
                    if (typeof employee.jobTitle !== 'undefined') {
                        return employee
                    }
                    return filteredResponse
                })
                console.log(filteredResponse)
                this.setState({
                    employees: filteredResponse
                })
                console.log(this.state.employees)
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
                {this.state.isHidden === false ? <Employees {...this.state} updateIncorrectState={this.updateIncorrectState} updateCorrectState={this.updateCorrectState} randomEmployees={this.randomEmployees} randomEmployee={this.randomEmployee} /> : null}
            </div>
        )
    }

}

export default EmployeeContainer