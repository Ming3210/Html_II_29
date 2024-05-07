import React, { useState } from 'react'

export default function B10() {
    const genders = ['Nam', 'Nữ', 'Khác'];
    const [gender, setGender] = useState<string>('Nam');

    const handleRandomGender = () => {
        const index = Math.floor(Math.random() * genders.length);
        setGender(genders[index]);
    };

  return (
    <div>
        <h1>B10</h1>
        <p>Giới tính : {gender}</p>
        <button onClick={handleRandomGender}>Random gender</button>
    </div>
  )
}
