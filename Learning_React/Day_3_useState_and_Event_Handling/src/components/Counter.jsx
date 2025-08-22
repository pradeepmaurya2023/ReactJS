import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);



  return (
    <div className="p-4">
        <p>Counter : {count}</p>
        <button type="button" className="border-2 rounded-md border-black-100 p-2" onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  )
}

export default Counter