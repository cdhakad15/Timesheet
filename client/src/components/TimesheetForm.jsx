import React, { useState } from 'react'
import axios from "axios";

const TimesheetForm = () => {
    const [date,setDate]= useState("");
    const [hoursWorked, setHoursWorked] = useState("");
    const [taskDescription, setTaskDescription]= useState("");
    const [isLoading, setIsLoading] = useState(false);



 const handleFormSubmit = async(event)=>{
    event.preventDefault();
    try {
        setIsLoading(true);
        await axios.post("http://localhost:3000/timesheets/create",{
            employee:employeeId,
            date,
            hoursWorked:parseFloat(hoursWorked),
            taskDescription
        });
        setDate("")
        setTaskDescription("")
        setTaskDescription("")
        setIsLoading(false);
        alert("Timesheet entry submitted successfully ")
    } catch (error) {
        setIsLoading(false);
        console.error("Error submitting timesheet entry",error);
        alert("Failed to submit timesheet entry. Please try again");
    }
 };

    
  return (
    <div className='mt-8'>
        <h3 className='text-;g font-semibold mb-2'>Timesheet Form</h3>
        <form onSubmit={handleFormSubmit}>
            <div className='flex flex-col mb-4'>
                <label htmlFor="date" className='mb-1'>Date</label>
                <input type="date" id='date' value={date} onChange={(e)=>setDate(e.target.value)} required className='border rounded py-1 px-2 ' />
            </div>
           
            <div className='flex flex-col mb-4'>
                <label htmlFor="hoursWorked" className='mb-1'>Hours Worked</label>
                <input type="number" id='hoursWorked' value={hoursWorked} onChange={(e)=>setHoursWorked(e.target.value)} required className='border rounded py-1 px-2 ' />
            
            
            </div>    
            
            <div className='flex flex-col mb-4'>
                <label htmlFor="taskDescription" className='mb-1'>Task Description:</label>
             <textarea  id="taskDescription" value={taskDescription}  onChange={(e)=>setTaskDescription(e.target.value)} required className="border rounded  py-1 px-2"></textarea>
            </div>

            <button type='submit' disabled={isLoading}  className='bg-blue-5-- text-white py-1 px-4 rounded disabled:opacity-50'>
                {isLoading ? "Submitting..." : "Submit"}
            </button>

        </form>
    </div> 
  )
}

export default TimesheetForm