import React, {useState } from "react"
import axios from "axios"
import {Link } from "react-router-dom"
import img from "./images/pricing.jpg"
import Back from "./common/Back"
import "./form.css"

function Signup() {

    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        if(name==="" || number===""|| password===""){
            alert("All fields are required")
        }
        else{
            setName("")
            setNumber("")
            setPassword("")
            try{
                await axios.post("http://localhost:8000/signup",{
                    name,number,password
                })
                .then(res=>{
                    if(res.data==="exist"){
                        alert("User already exists")
                    }
                    else if(res.data==="notexist"){
                        alert("User sucessfully signed up")
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


    return (
        
        <>
        <section className='contact mb'>
        <Back name='' title='Sign Up' cover={img} />
        <div className='container'>
          <form className='shadow'action="POST">
            <h4>Sign Up</h4> <br />
              <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Name' required />
            <div>
              <input type='number' onChange={(e) => { setNumber(e.target.value) }} value={number} placeholder='Mobile Number' maxLength="10" required />
              <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password' maxLength="8" required />
            </div>
            <button onClick={submit}>Sign Up</button><br/><br/>
            <Link to="/">Login</Link>
          </form>
          
        </div>
      </section>
        </>
    )
}

export default Signup