import React from 'react'

const Employees = (props) => {
    // select a random employee
    const randomEmployee = props.employees[Math.floor(Math.random() * props.employees.length)]
    console.log(randomEmployee)

    // create array to hold random employees, including the selected one
    const randomEmployees = []

    // Add the random employee to the array
    randomEmployees.push(randomEmployee)

    // shuffle employees from state and add 4 into randomEmployees array
    for (var i = 0; randomEmployees.length <= 4; i++) {
        let randomIndex = Math.floor(Math.random() * props.employees.length),
            element = props.employees.splice(randomIndex, 1)
        randomEmployees.push(element[0])
    }

    console.log(randomEmployees)

    // shuffle the randomEmployees array before rendering
    const shuffledRandomEmployees = []

    for (var j = 0; shuffledRandomEmployees.length <= 4; j++) {
        let randomIndex = Math.floor(Math.random() * randomEmployees.length),
            element = randomEmployees.splice(randomIndex, 1)
        shuffledRandomEmployees.push(element[0])
    }

    console.log(shuffledRandomEmployees)

    return (
        <div className="cards">
            {/* Return a random name and ask who this person is */}
            {props.employees.length > 0 ? <h2>Who is {randomEmployee.firstName} {randomEmployee.lastName}?</h2> : null}
            {/*Render shuffled randomEmployees array here*/}
            {props.employees.map(employee => {
                return (
                    <img src={employee.headshot.url} alt={employee.headshot.alt} key={employee.id}></img>
                )
            })}
        </div>
    )
}

export default Employees