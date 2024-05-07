import React,{ useState } from 'react'

export default function B2() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <h1>B2</h1>
        <p>Dữ liệu người dùng nhập: {inputValue}</p>
        <input
          type="text"
          onChange={handleInputChange}
        />
      </div>
    );
}
