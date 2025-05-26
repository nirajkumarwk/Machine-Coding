import { useState } from "react";
import "./App.css";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checkedItems, setCheckedItems }) => {
  const handleCheckbox = (isChecked, node) => {
    console.log("nodeid", node.id);
    setCheckedItems((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(node);
      console.log("newSTate", newState);
      return newState;
    });
  };
  console.log("checkedItems", checkedItems);

  return (
    <div className=" flex flex-col space-y-3">
      {data.map((node) => {
        return (
          <div className="" key={node.id}>
            <div
              className="flex items-center  mt-2
                "
            >
              <input
                type="checkbox"
                className="w-6 h-6"
                onChange={(e) => handleCheckbox(e.target.checked, node)}
                checked={checkedItems[node.id] || false}
              />
              <h3 className="ml-2">{node.label}</h3>
            </div>
            <div className="">
              {node.children && node.children.length > 0 && (
                <div className="ml-6 flex mt-4">
                  <Checkboxes
                    data={node.children}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checkedItems, setCheckedItems] = useState({});
  return (
    <div>
      <h2 className="font-bold text-2xl mb-6">Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    </div>
  );
}
