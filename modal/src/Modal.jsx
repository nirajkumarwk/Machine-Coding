import React, { useState } from "react";

function Modal() {
  // Step 1: Create a state variable isOpen and setIsOpen using useState
  const [isOpen, setIsOpen] = useState(false);

  // Step 2: Create functions handleOpen and handleClose to toggle modal visibility
  const handleOpen = () => { 
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" , position: 'relative', }}>
      <h1>Modal Popup</h1>

     <button 
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={handleOpen}
      >
        Open Modal
      </button>

      {/* Step 4: Conditionally render the modal when isOpen is true */
        isOpen && (<div className='modal-backdrop'
          data-testid='modal-backdrop'
          onClick={handleOpen}>
          <div className='modal_content'>
            <h1>Modal Header</h1>
            <p>This is the modal body</p>
           <button style={{width: 'max-content'}} onClick={handleOpen}>Close</button>
          </div>
        </div>) 
      }
      {/* Modal should close when clicking the backdrop or the Close button */}
      {/* Modal content should not close when clicking inside */}
    </div>
  );
}

export default Modal;
