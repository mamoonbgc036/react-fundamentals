import { useState } from 'react'

interface Employee {
    id: number,
    name: string,
    department: string,
    salary: number,
    helighted: boolean
}

export default function EmployeeManager() {
    const [employees, setEmployee] = useState<Employee[]>(
        [
            { id: 1, name: 'mamoon', department: 'Finance', salary: 50000, helighted: false },
            { id: 2, name: 'noman', department: 'Accounting', salary: 40000, helighted: false }
        ]
    )

    const [formData, setFormData] = useState<Employee>({
        id: Date.now(),
        name: "",
        department: "",
        salary: 0,
        helighted: false
    })

    const handleDelete = (id: number) => {
        const newEmployees = employees.filter(employee => employee.id != id);
        setEmployee(newEmployees)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEmployee([...employees, formData])
    }

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const toggleHighlight = (id: number) => {
        setEmployee(prev => prev.map(emp => emp.id == id ? { ...emp, helighted: !emp.helighted } : emp))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnchange} name="name" />
                <input type="text" onChange={handleOnchange} name="department" />
                <input type="text" onChange={handleOnchange} name="salary" />
                <button type="submit">Add</button>
            </form>

            <table><thead><tr><th>Id</th><th>Name</th><th>Department</th><th>Salary</th><th>Action</th></tr></thead><tbody>
                {
                    employees.map(employee => <tr key={employee.id} style={{ background: employee.helighted ? "yellow" : "white" }}><td>{employee.id}</td><td>{Date.now()}</td><td>{employee.name}</td><td>{employee.department}</td><td>{employee.salary}</td><td><button onClick={() => handleDelete(employee.id)}>Delete</button></td><td></td><td><button onClick={() => toggleHighlight(employee.id)}>{employee.helighted ? 'DeHighlight' : 'Highlight'}</button></td></tr>)
                }
            </tbody></table>
        </>
    )
}