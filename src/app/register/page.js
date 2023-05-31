"use client"
import Link from "next/link";
import { useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [status, setStatus] = useState(null)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { "Register_Type": "application/josn" },
         body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,

        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        })
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 parent">
            <div className="shadow-custom p-4 w-100">
              <h3 className="text-center">Create New Account</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <div className="form-formating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={user.name}
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-formation mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="Email">Email</label>

                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-formation mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="Password">Password</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-sm btn-primary w-100 mb-4">Submit</button>
              </form>
              
                {status === 'success' && <p>Thank you for your message!</p>}
                {status === 'error' && <p>There was an error submitting your message. Please try again.</p>}
              
              <span>Already Have Account <Link href={'/login'}>Click Here</Link></span>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

    </>
  )
}

export default Register