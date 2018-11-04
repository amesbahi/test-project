import React, { Component } from 'react'
import { relative } from 'path';

class Employees extends Component {
    constructor(props) {
        super(props)

        this.clickEmployee = this.clickEmployee.bind(this)
    }

    // Check if selected employee is equal to random one
    clickEmployee(e) {
        console.log(e.target)
        console.log(this.props.randomEmployee)
        if (e.target.alt === this.props.randomEmployee.headshot.alt) {
            // Track how many times the user gets the guess right and wrong
            alert("Correct!")
            this.props.updateCorrectState()
            console.log(this.props.correct.length)
        } else {
            alert("Try again!")
            this.props.updateIncorrectState()
            console.log(this.props.incorrect.length)
        }
    }

    render() {
        const style = {
            width: '250px',
            height: '250px',
            position: relative,
            margin: '5px'
        }

        return (
            <div className="cards">
                {/* Return a random name and ask who this person is */}
                <h2>Who is {this.props.randomEmployee.firstName} {this.props.randomEmployee.lastName}?</h2>
                {/* Render the length of the correct and incorrect state */}
                <h3>Correct attempts: {this.props.correct.length}</h3>
                <h3>Incorrect attempts: {this.props.incorrect.length}</h3>
                {/*Render shuffled randomEmployees array here*/}
                {this.props.randomEmployees.map((employee, index) => {
                    return (
                        <img style={style} onClick={this.clickEmployee} src={employee.headshot.url} alt={employee.headshot.alt} key={employee.id+index}></img>
                    )
                })}
            </div>
        )
    }
}

export default Employees