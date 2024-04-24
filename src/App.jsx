
import {NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);

  return (
    <>
      
      <h1 className='text-6xl text-blue-800 text-center'>Coffee Shop : {coffees.length} </h1>

      <div className='flex gap-4'>
      <NavLink className='btn btn-secondary' to="/addCoffee">Add Coffee</NavLink>
      <NavLink className='btn btn-secondary' to="/updateCoffee">Update Coffee</NavLink>
      <NavLink className='btn btn-secondary' to="/signUp">Sign Up</NavLink>
      <NavLink className='btn btn-secondary' to="/signIn">Sign In</NavLink>
      <NavLink className='btn btn-secondary' to="/users">Users</NavLink>
      </div>

      <div className='grid grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard
          key={ coffee._id }
          coffee={ coffee }
          coffees={ coffees }
          setCoffees={ setCoffees }
        ></CoffeeCard>)
      }
      </div>
     
    </>
  )
}

export default App
