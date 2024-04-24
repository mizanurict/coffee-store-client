/** @format */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, photo } = coffee;
    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                
                  fetch(`http://localhost:5000/coffee/${_id}`, {
                      method: "DELETE"
                  })
                      .then(res => res.json())
                      .then(data => {
                          console.log(data);
                          if (data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })  
                              setCoffees(coffees.filter(c => c._id!== _id));
                          }
                  })
              
            }
          });
    }

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure>
        <img className="size-fit" src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-between items-center w-2/3 px-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
        <div className=" flex flex-col space-y-2">
          <button className="btn btn-primary">View</button>
          <Link to={`/updateCoffee/${_id}`} className="btn btn-secondary">Edit</Link>
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
