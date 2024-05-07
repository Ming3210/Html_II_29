import React, { useState } from 'react'

export default function B1() {
    const check = () => {
       console.log("Clicked");
       
    }
  return (
    <div>
      <h1>B1</h1>
        <button onClick={check}>Click</button>
    </div>
  )
}
