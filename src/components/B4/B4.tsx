import React, { useState } from 'react'

export default function B4() {
    const [selectValue, setSelectValue] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value);
    }    
  return (
    <div>
        <h1>B4</h1>
        <br />
        <p><b>Tỉnh / Thành phố :</b> { selectValue }</p>
        <select name="" id="" onChange={handleChange}>
            <option value="-- chọn tỉnh / thành phố">-- chọn tỉnh / thành phố --</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP HCM">TP HCM</option>
        </select>
    </div>
  )
}
