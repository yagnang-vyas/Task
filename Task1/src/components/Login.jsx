import React, { useEffect, useState } from "react"
import img from "./images/pricing.jpg"
import Back from "./common/Back"
import "./form.css"
import axios from "axios"
import { Link,useHistory } from "react-router-dom"


function Login() {
    const history = useHistory();
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        if(number==="" || password===""){
            alert("All fields are required")
        }
        else{
            setNumber("")
            setPassword("")
            try{
                await axios.post("http://localhost:8000/",{
                    number,password
                })
                .then(res=>{
                    if(res.data=="exist"){
                        alert("User sucessfully signed up")
                        history.push("/home");
                    }
                    else if(res.data=="notexist"){
                        alert("User have not signed up")
                    }
                    else if(res.data=="notcorrect"){
                        alert("username or password is incorrect")
                    }
                })
                .catch(e=>{
                    alert("wrong details")
                    console.log(e);
                })
    
            }
            catch(e){
                console.log(e);
    
            }
        }
    }
// console.log(name,password)

    return (
        <>
        <section className='contact mb'>
        <Back name='' title='Login' cover={img} />
        <div className='container'>
          <form className='shadow'action="POST" onSubmit={submit}>
            <h4>Login</h4> <br />
            <div>
              <input type='text' onChange={(e) => { setNumber(e.target.value) }} value={number} placeholder='Number' required />
              <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password' required />
            </div>
            <button>Login</button><br/><br/>
            <Link to="/register">Register</Link>
          </form>
          
        </div>
      </section>
        </>
    )
}

export default Login