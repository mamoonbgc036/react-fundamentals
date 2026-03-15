import { useState } from 'react'

interface Employee {
    name: string,
    department: string,
    salary: number
}

export default function EmployeeManager() {
    const [employees, setEmployee] = useState<Employee[]>(
        [
            { name: 'mamoon', department: 'Finance', salary: 50000 },
            { name: 'noman', department: 'Accounting', salary: 40000 }
        ]
    )

    return (
        <>
            <button>Add</button>
            <table><thead><tr><th>Name</th><th>Department</th><th>Salary</th><th>Action</th></tr></thead><tbody>
                {
                    employees.map(employee => <tr><td>{employee.name}</td><td>{employee.department}</td><td>{employee.salary}</td><td><button>Delete</button></td></tr>)
                }
            </tbody></table>
        </>
    )
}