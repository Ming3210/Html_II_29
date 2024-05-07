import React, { useState } from 'react'
interface User{
    email: string
    password: string
}

export default function B9() {
    const [active, setActive] = useState<boolean>(false)
    const [user, setUser] = useState<User>({
        email: "",
        password: ""
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,[name]:value
        })
    }
    const register = () => {
        console.log("Đăng kí",user);
        setActive(true)
    }
   
  return (
    <div>
        <h1>B9</h1>
        <input onChange={handleChange} name="email" type="text" placeholder="Enter your email" /><br />
        <input onChange={handleChange} name="password" type="password" placeholder="Enter your password" /><br />
        <button onClick={register}>Submit</button>
        {active ?
        <div>
             <p>Email:{user.email}</p>
            <p>Password:{user.password}</p>
        </div>
        
         : ""}
    </div>
  )
}
