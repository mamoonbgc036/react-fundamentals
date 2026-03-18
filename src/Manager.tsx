import { useState } from 'react'

interface Employee {
    id: number,
    name: string,
    department: string,
    salary: number
}

export default function Manager() {
    const [employees, setEmployee] = useState<Employee[]>(
        [
            { id: 1, name: 'mamoon', department: 'finance', salary: 35000 },
            { id: 2, name: 'noman', department: 'accounting', salary: 50000 }
        ]
    )

    const [formData, setFormData] = useState<Employee>({
        id: Date.now(),
        name: "",
        department: "",
        salary: 0
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEmployee([...employees, formData])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} />
                <input type="text" name="department" onChange={handleChange} />
                <input type="text" name="salary" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}