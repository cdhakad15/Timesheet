import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const EmployeeDashboard = () => {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchEmployees = async()=>{
            try {
                const response = await axios.get("http://localhost:3000/employees/allEmployee");
                setEmployees(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching employees", error);
            }
        };

        fetchEmployees();
    },[]);
  return (
    <div>
        <h2>Employee Dashboard</h2>
        {isLoading ?(<p>Loading...</p>):(

        <ul>
        {employees.map(employee=>(
            <li key={employee._id} className=''>
                <Link to={`/employees/${employee._id}`} className='text-blue-500 hover:underline'>
                {employee.name} - {employee.email}
                </Link>
            </li>
        ))}
        </ul> 
        )}


    </div>
  );
};

export default EmployeeDashboard