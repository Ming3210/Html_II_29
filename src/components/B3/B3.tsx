import React,{useState} from 'react'

export default function B3() {
    const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
        <h1>B3</h1>
        <p>Thời gian: {inputValue}</p>
      <input
        type="date"
        onChange={handleInputChange}
      />
    </div>
  );
};
  
