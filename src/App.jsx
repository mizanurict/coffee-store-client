
import { Link, useLoaderData } from 'react-router-dom'
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
      <Link className='btn btn-secondary' to="/addCoffee">Add Coffee</Link>
      <Link className='btn btn-secondary' to="/updateCoffee">Update Coffee</Link>
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
