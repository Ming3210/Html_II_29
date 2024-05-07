import React, { useState } from 'react'
import Modal from './Modal'

export default function Condition() {
    const [active,setActive] = useState<boolean>(false)
    const click =() => {
        console.log(1111111111);
        setActive(!active)
    }
  return (
    <div>Condition
        {active ?  <Modal></Modal> : ""} <br />
        <button onClick={click}>Click</button>
    </div>
  )
}
