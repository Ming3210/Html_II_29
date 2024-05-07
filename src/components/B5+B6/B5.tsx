import React, { useState } from 'react'

export default function B5() {
    const [active,setActive] = useState<boolean>(false)
    const click =() => {
        setActive(!active)
        console.log(active);        
    }
  return (
    <div>
        <h1>B5 + B6</h1>
        {active ? <button>Hiện</button> : <button>Ẩn</button>} <br />
        <button onClick={click}>Click</button>
    </div>
  )
}
