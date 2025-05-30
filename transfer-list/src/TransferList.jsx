import "./index.css";
import { useState } from "react";

export default function TransferList() {
  const [available, setAvailable] = useState(["Item A", "Item B", "Item C"]);
  const [selected, setSelected] = useState([]);
  const [tempAvailable, setTempAvailable] = useState([]);
  const [tempSelected, setTempSelected] = useState([]);

  const moveRight = (tempAvailable) => {
    if (tempAvailable.length === 0) {
      console.log("temp is empty", tempAvailable);
      return;
    }
    setSelected((prev) => {
      const newtemp = [...prev, ...tempAvailable];
      //   console.log("newTempmoveright", newtemp);
      return newtemp;
    });

    setAvailable((prev) => {
      const newTemp = prev.filter((old) => !tempAvailable.includes(old));
      console.log("setAvailable", newTemp);
      return newTemp;
    });
    setTempAvailable([]);
  };

  const moveLeft = (tempSelected) => {
    if (tempSelected.length === 0) {
      console.log("temp is empty", tempSelected);
      return;
    }
    setAvailable((prev) => {
      const newtemp = [...prev, ...tempSelected];
      //   console.log("newTempmoveright", newtemp);
      return newtemp;
    });

    setSelected((prev) => {
      const newTemp = prev.filter((old) => !tempSelected.includes(old));
      console.log("setAvailable", newTemp);
      return newTemp;
    });
    setTempSelected([]);
  };

  const handleCheckbox = (e,  item, list) => {
    const checked = e.target.checked;
    const setTemp = list === "available" ? setTempAvailable : setTempSelected;
    // console.log("checked", checked);
    if (checked) {
      setTemp((prev) => {
        if (prev.includes(item)) {
          return prev;
        }
        const newtemp = [...prev];
        newtemp.push(item);
        // console.log("newTemp", newtemp);
        return newtemp;
      });
    } else {
      //   console.log("false");
      setTemp((prev) => {
        const newtemp = prev.filter((tempitem) => tempitem !== item);

        console.log("remove", newtemp);
        return newtemp;
      });
    }
  };

  //   console.log("temp", temp);
  //   console.log('available', available)

  return (
    <div className="flex justify-center mt-44">
      {
        /* TransferList Implementation */
        <>
          <div className="m-4">
            <h1 className="font-bold text-2xl mb-4">Available</h1>
            {available?.map((item, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckbox(e,  item, "available")
                    }
                    checked={tempAvailable.includes(item) || false}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col ">
            <button
              className={`p-2 rounded-md mb-2 ${
                tempAvailable.length === 0 ? "bg-gray-200" : "bg-green-200"
              }`}
              onClick={() => moveRight(tempAvailable)}
              disabled={tempAvailable?.length === 0}
            >
              right
            </button>
            <button
              className={`p-2 rounded-md mb-2 ${
                tempSelected.length === 0 ? "bg-gray-200" : "bg-green-200"
              }`}
              onClick={() => moveLeft(tempSelected)}
            >
              left
            </button>
          </div>

          <div className="m-4">
            <h1 className="font-bold text-2xl mb-4">Selected</h1>
            {selected.map((item, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckbox(e,  item, "selected")}
                    checked={tempSelected.includes(item) || false}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </>
      }
    </div>
  );
}
