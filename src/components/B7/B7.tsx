import React, { useState } from 'react'

export default function B7() {
    const [add,setAdd] = useState<number[]>([])
    const click =() => {
        const randomNum = Math.floor(Math.random()*10);
        setAdd([...add, randomNum]);
    }
  return (
    <div>
        <h1>B7</h1>
        <p>[{add.join(",")}]</p>
        <button onClick={click}>Click</button>
    </div>
  )
}
