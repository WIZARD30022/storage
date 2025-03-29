import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // const onSubmit = (data) => console.log(data)

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(4);
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {
      "Content-Type": "application/json",
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if (data.Username === "mahesh") {
    //   setError("Blocked", {message: "You are blocked from this server"})
    // }
    // else if(data.Username !== "vinit"){
    //   setError("Myform", {message: "Your username is not correct match"})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading... </div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Username' {...register("Username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "too short lenght"}, maxLength: { value: 8, message: "too long lenght" }})} type="text"  />
          {errors.Username && <div className='red'> {errors.Username.message} </div>}
          <br />
          <input placeholder='Password' {...register("Password", {required: {value: true, message: "This field is required"}, minLength: {value: 7, message: "too short lenght"} })} type="password" />
          {errors.Password && <div className='red'> {errors.Password.message} </div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.Myform && <div className='red'> {errors.Myform.message} </div>}
          {errors.Blocked && <div className='red'> {errors.Blocked.message} </div>}
        </form>
      </div>
    </>
  )
}

export default App

// visit react-hook-form for form
// visit express hello world example for express
// additional used web sites are cors and body-parser