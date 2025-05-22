import React, { useState } from "react";
import '../src/App.css'
function ChipsInput() {
  const [allChips, setAllChips] = useState([]);
  const [text, setText] = useState('');

  const handleKeyDown = (e) => {

    if (e.key === 'Enter' && text.trim()) {
      setAllChips((prev) =>
        [...prev, text]
      )
      setText('');
      console.log('Allchips', allChips)
    }
  }


  const handleClick = (index) => {
    const result = allChips.filter((chip, index1) => index !== index1)
    setAllChips(result);
    console.log('result', result);
  }


  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div style={{display: 'flex'}}>
        {allChips.map((chip, index) => {
          return (
            <div key={index} 
             className='chip'>
              {chip}
              <button style={{color: 'red'}} onClick={() => handleClick(index)}>
              X</button>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default ChipsInput;