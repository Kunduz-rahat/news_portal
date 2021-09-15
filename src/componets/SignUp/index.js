import React from "react";
import Layout from "../Layout";

const SignUp = () => {
  return (
    <Layout>
      <div className='row mt-5'>
        <h3 className='text-center'>Sign Up</h3>
        <div className='col-md-4 offset-md-4'>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text"  id='exampleInputEmail1' className='form-control me-3 ' placeholder='Enter email'/>
          <label className='mt-2' htmlFor="exampleInputEmail2">Password</label>
          <input type="password"  id='exampleInputEmail2' className='form-control me-3' placeholder='password'/>
          <button type='button' className='btn btn-primary mt-3 btn-sm'>Submit</button>
        </div>

      </div>
    </Layout>

  )
}
export default SignUp