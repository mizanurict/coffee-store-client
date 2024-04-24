/** @format */
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        //send to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Coffee Added Successfully",
                        icon: "success"
                      });
                }
             })
        

}

  return (
    <div className="flex flex-col items-center justify-center my-8 bg-slate-200 p-16 mx-16">
      <h2 className="text-4xl font-bold my-4">Add Coffee</h2>
      <form onSubmit={handleSubmit}>
        {/* form row name and  quantity */}
        <div className="flex gap-4 w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered" required />
          </div>
        </div>
        {/* form row supplier and taste */}
        <div className="flex gap-4 w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input type="text" placeholder="Available Quantity" name="taste" className="input input-bordered" required />
          </div>
        </div>
        {/* form row Category and details */}
        <div className="flex gap-4 w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input type="text" placeholder="Category Name" name="category" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" placeholder="Details" name="details" className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
        <input type="submit" value="ADD COFFEE" className="btn btn-block my-4" />
      </form>
    </div>
  );
};

export default AddCoffee;
