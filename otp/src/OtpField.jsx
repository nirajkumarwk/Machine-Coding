import { useEffect, useRef, useState } from "react";

const OtpField = () => {
  const [inputField, setInputField] = useState(["", "", "", "", ""]);
  const inputRef = useRef([]);
  const NUMBER_OF_FIELD = 5;

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleNumbers = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputField((prev) => {
        const newArr = [...prev];
        newArr[index] = value;
        return newArr;
      });
      if (value && index < NUMBER_OF_FIELD - 1) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;
    if (key === "Backspace" && index > 0 && !inputField[index]) {
      console.log("key", key);
      console.log("index", index);
      inputRef.current[index - 1].focus();
    }
  };

  console.log(inputField);
  return (
    <div className="flex space-x-4">
      {inputField.map((_, index) => {
        return (
          <input
            onKeyDown={(e) => handleKeyDown(e, index)}
            key={index}
            type="text"
            maxLength={1}
            ref={(el) => (inputRef.current[index] = el)}
            className="w-16 h-16 border border-gray-400 rounded-md flex items-center justify-center text-center text-2xl"
            onChange={(e) => handleNumbers(e, index)}
            value={inputField[index]}
            required
          />
        );
      })}
    </div>
  );
};

export default OtpField;
