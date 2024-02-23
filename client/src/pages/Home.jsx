import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold mb-4'>Welcome to Timesheet Application</h2>
        <p>This is the homepage</p>
        <ul className='mt-4'>
            <li>
                <Link to="/employees" className='text-blue-500 hover:underline'>Employee Dashboard</Link>
            </li>
            <li>
                <Link to="/timesheet" className='text-blue-500 hover:underline'>Timesheet</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home