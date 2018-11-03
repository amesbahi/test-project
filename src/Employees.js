import React, { Component } from 'react'

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
            alert("Correct!")
        } else {
            alert("Try again!")
        }
    }

    render() {
        return (
            <div className="cards">
                {/* Return a random name and ask who this person is */}
                <h2>Who is {this.props.randomEmployee.firstName} {this.props.randomEmployee.lastName}?</h2>
                {/*Render shuffled randomEmployees array here*/}
                {this.props.randomEmployees.map(employee => {
                    return (
                        <img onClick={this.clickEmployee} src={employee.headshot.url} alt={employee.headshot.alt} key={employee.id}></img>
                    )
                })}
            </div>
        )
    }
}

export default Employees