import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  
  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });

  //const {username, email, password} = formState;
  

  useEffect(() => {
    //console.log('useEffect called!');
  }, [])

  useEffect(() => {
    //console.log('FormState change!');
  }, [formState])

  useEffect(() => {
    //console.log('Email change!');
  }, [email])

  return (
    <>
      <h1>Form with Custom Hook</h1>
      
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

{/*       {
        username === 'Pizuki2' && <Message/>
      } */}

      <input 
        type="email"
        className="form-control mt-3"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input 
        type='password'
        className="form-control mt-3"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-3" >Borrar</button>

      
    </>
  )
}
