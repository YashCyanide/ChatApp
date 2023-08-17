import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">ChatY</span>
      <span className="title">Register</span>
        <form>

            <input type="text" className="text" placeholder='display name'/>
            <input type="email" className="email" placeholder='email'/>
            <input type="password" className="password" placeholder='password'/>
            <input type="file" className="file" />
            <button>SIGN UP</button>
        </form>
        <p>Have an account ? LOGIN</p>
      </div>

    </div>
  )
}

export default Register
