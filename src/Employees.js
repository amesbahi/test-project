import React, { Component } from 'react'

class Employees extends Component {
    render() {
        return (
            <div className="cards">
                {/* Return a random name and ask who this person is */}
                <h2>Who is {this.props.randomEmployee.firstName} {this.props.randomEmployee.lastName}?</h2>
                {/*Render shuffled randomEmployees array here*/}
                {this.props.randomEmployees.map(employee => {
                    return (
                        <img src={employee.headshot.url} alt={employee.headshot.alt} key={employee.id}></img>
                    )
                })}
            </div>
        )
    }
}

export default Employees