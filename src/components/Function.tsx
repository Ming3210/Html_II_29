import React,{useState} from 'react'
interface User{
    username:string;
    email:string;
}

export default function Function() {
    const [user,setUser]=useState<User>({
        username:"",
        email:""
    })
    const del = (ID:any) => {
        console.log(ID);
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,[name]:value
        })
    }
   
    const register = () => {
        console.log("Bạn đã đăng kí",user);
    }
  
    // gọi hàm theo kiểu truyền tham số
  return (
    <div>Function
        <p onClick={()=>del(5)}>Hoa</p>
        <label htmlFor="">username</label>
        <input name="username"
        onChange={handleChange}
        type="text" />
        <label htmlFor="">EMAIL</label>
        <input type="text" name='email' onChange={handleChange} /><br />
        <button onClick={register}>RES</button>
    </div>
  )
}
