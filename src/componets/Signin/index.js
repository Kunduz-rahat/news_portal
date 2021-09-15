import React from "react";
import Layout from "../Layout";

const Signin = () => {
  return (
    <Layout>
      <div className='row mt-5'>
        <h3 className='text-center'>Sign In</h3>
        <div className='col-md-4 offset-md-4'>
          <input type="text"   className='form-control me-3 mt-5' placeholder='username'/>
          <input type="password"   className='form-control me-3 mt-3' placeholder='password'/>
          <button type='button' className='btn btn-primary mt-3 btn-sm'>Login</button>
        </div>

      </div>
    </Layout>

  )
}
export default Signin