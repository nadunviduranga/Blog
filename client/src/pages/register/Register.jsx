import React, { useState } from 'react'
import classes from './register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'
import { register } from '../../redux/authSlice'
import {useDispatch} from 'react-redux'

const Register = () => {

  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegister = async(e) => {
    e.preventDefault()

    if(username === '' || email === '' || password === '') return
    try {
      const option = {'Content-Type' : 'application/json'}

      const data = await request('/auth/register' ,"POST" ,option,{username,email,password})
      dispatch(register(data))
      console.log(data)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type='text' placeholder='Username .....' onChange={(e) => setUsername(e.target.value)} />
          <input type='email' placeholder='Email .....' onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password .....' onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Register</button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register