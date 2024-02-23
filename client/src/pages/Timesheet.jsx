import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Timesheet = () => {

    const[timesheets, setTimesheets] =useState([]);
    const[isLoading, setIsLoading] = useState(true);

   useEffect(()=>{
     const fetchTimesheets = async()=>{
        
         
        try {
            const response = await axios.get(`http://localhost:3000/timesheets/getAllEmployeeTimesheet`);
            setTimesheets(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(`Error fetching timesheets`,error);
        }
     }
       fetchTimesheets();
   },[])

  return (
    <div className='mx-auto px-4 py-8 container'>

    <h2 className='text-2xl font-bold mb-4'>Timesheet</h2>
    {isLoading ?(
        <p>Loading...</p>
    ):
    
    (
        <table className='w-full border-collapse border border-gray-200'>
            <thead>
                <tr>
                    <th className='py-2 px-4 bg-gray-100 border-b'>Date</th>
                    <th className='py-2 px-4 bg-gray-100 border-b'>Hours Worked</th>
                    <th className='py-2 px-4 bg-gray-100 border-b'>Task Description</th>
                </tr>
            </thead>

            <tbody>
                {timesheets.map((timesheet,index)=>(
                    <tr key={index}>
                        <td className='py-2 px-4 border' >{new Date(timesheet.date).toLocaleDateString()}</td>
                        <td className='py-2 px-4 border'>{timesheet.hoursWorked}</td>
                        <td className='py-2 px-4 border'>{timesheet.taskDescription}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

    </div>
  )
}

export default Timesheet

