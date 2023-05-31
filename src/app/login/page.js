"use client"
import Link from 'next/link'
import React from 'react'
import { Form } from 'react-router-dom'

const page = () => {
  return (
    <>
      
        <div className='container'>
          <div className="row">
            <div className="col-4"></div>
            <div className='col-4 bg-secondary mt-5 p-5 shadow-lg'>
              <p className='text-primary text-center fs-1'>Login</p>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" name="email" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <div>
                  <p>Don&rsquo;t Have Account <Link className='ms-1 text-light text-decoration-none' href={"/register"}>SIGN UP</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default page