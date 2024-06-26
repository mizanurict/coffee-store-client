/** @format */

import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const SignIn = () => {

  const { signInUser } = useContext(AuthContext);

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
      
      console.log(email, password);

      signInUser(email, password)
          .then(result => {
              console.log(result.user);
              const user = {
                  email,
                  lastLoggedAt: result.user?.metadata?.lastSignInTime
              }
              //update last login database
              fetch('http://localhost:5000/user', {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
              })
                  .then(res => res.json())
                  .then(data => {
                  console.log(data);
              })
          })
          .catch(error => {
              console.error(error);
          });
    }
    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignIn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
