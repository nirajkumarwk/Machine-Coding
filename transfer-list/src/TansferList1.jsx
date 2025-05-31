import { useState } from "react";

export default function TransferList1() {
  const [items, setItems] = useState({});
  const [available, setAvailable] = useState(["Item A", "Item B", "Item C"]);
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (e, item) => {
    const checked = e.target.checked;
    setItems((prev) => {
      const newItems = { ...prev };
      newItems[item] = checked;
      console.log(newItems);
      return newItems;
    });
    items[item];
  };

  const moveright = (items) => {
    if (Object.keys(items).length === 0) {
      return console.log("items is empty", items);
    }

    let newAr = [];
    for (const [key, value] of Object.entries(items)) {
      if (value === true && available.includes(key)) {
        newAr.push(key);
      }
    }
    console.log("newAr", newAr);

    setSelected((prev) => {
      const ar = [...prev, ...newAr];
      return ar;
    });

    setAvailable((prev) => {
      const ar = prev.filter((item) => !newAr.includes(item));
      console.log("ar", ar);
      return ar;
    });

    setItems({});
  };

  const moveLeft = (items) => {
    if (Object.keys(items).length === 0) {
      return console.log("items is empty", items);
    }

    let newAr = [];
    for (const [key, value] of Object.entries(items)) {
      if (value === true && selected.includes(key)) {
        newAr.push(key);
      }
    }
    console.log("newAr", newAr);

    setAvailable((prev) => {
      const ar = [...prev, ...newAr];
      return ar;
    });

    setSelected((prev) => {
      const ar = prev.filter((item) => !newAr.includes(item));
      console.log("moveleft ar", ar);
      return ar;
    });

    setItems({});
  };
  return (
    <div className="flex space-x-6 justify-center mt-40">
      {
        /* TransferList Implementation */
        <>
          <div>
            <h1 className="font-bold text-3xl">Available</h1>
            {available?.map((item, index) => {
              return (
                <div key={index} className="flex">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={items[item] || false}
                    onChange={(e) => handleCheckbox(e, item)}
                  />
                  <p className="text">{item}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <button
              className={`p-4 bg-gray-200 rounded-md mb-2`}
              onClick={() => moveright(items)}
            >
              →
            </button>
            <button
              className={`p-4 bg-gray-200 rounded-md mb-2`}
              onClick={() => moveLeft(items)}
            >
              ←
            </button>
          </div>

          <div>
            <h1 className="font-bold text-3xl">Selected</h1>
            {selected?.map((item, index) => {
              return (
                <div key={index} className="flex">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={items[item] || false}
                    onChange={(e) => handleCheckbox(e, item)}
                  />
                  <p className="text">{item}</p>
                </div>
              );
            })}
          </div>
        </>
      }
    </div>
  );
}
