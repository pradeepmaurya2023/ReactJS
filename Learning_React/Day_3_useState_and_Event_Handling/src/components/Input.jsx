import { useState } from "react";

const Input = () => {
    const [user, setUser] = useState({ name: "", age: "" });

    const handleNameChange= (e)=>{
        setUser({...user,name : e.target.value})
    }
    const handleAgeChange= (e)=>{
        setUser({...user,age : e.target.value})
    }
    return (
        <div>
            <input type="text" value={user.name} onChange={handleNameChange} placeholder="Enter Your Name" />
            <input type="number" value={user.age} onChange={handleAgeChange} placeholder="Enter Your age" />
            <p>Hello {user.name}, you are {user.age}yrs old </p>
        </div>
    )
}

export default Input    