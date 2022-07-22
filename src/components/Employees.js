
const Employees = (props) => {
    
    const employeeList = props.employees
    
    return(
        <div>
            <h1>Employees</h1>
            <ul>
                {
                    employeeList.map( (person, index) => {
                        const name = `${ person.firstname } ${person.lastname }`
                        return(
                            <li key={ index.toString() }>{ name }</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Employees;