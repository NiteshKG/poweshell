import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
const handleSubmit=()=>{

}


const onChange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})
}
  return (
    <>
      <div className="container">
       <form onSubmit={handleSubmit}>
      

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
  </div>
  
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/signup" className="m-3 btn btn-danger">New User</Link>
</form>
</div>
    </>
  );
};

export default Login;
