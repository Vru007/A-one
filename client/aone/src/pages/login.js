import React, { useState } from "react";
export default function Login(){

    const [user,setUser]=useState({
        name:"",password:""
    });
    
    let name,value;
    const handleChange=(e)=>{
            
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
      }
    // const register=(e)=>{
    //     e.preventDefault();
    //     fetch(`http://localhost:5000/register`,{
           
    //     method:"Post",
    //     headers:{
    //            "Content-Type":"application/json",

    //        },
    //        body: JSON.stringify({
    //         username,
    //         password
    //        })
    //     })
    // };
        
    return(

        <div>
        <h1>Login Page</h1>
        <form>
        <input type="text" name="name" placeholder="username"
           value={user.name}
           onChange={handleChange}
        />
        <br/>
        
        <input type="password" name="password" placeholder="password"
          value={user.password}
          onChange={handleChange}/>
        <br/>
        <button type="submit">Login</button>
        </form>
        </div>
    )
}