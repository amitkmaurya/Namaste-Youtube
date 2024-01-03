import React, { useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  let x = 0;
  return (
    <>
      <div className="m-2 p-2 w-96 h-96 border border-gray-200">
        <div>
          <button
            className="m-2 p-2 bg-green-100"
            onClick={() => {
                x = x + 1;
                // console.log(x)
            }}
          >
            increase x
          </button>
          <span className="font-bold"> Let = {x}</span>
        </div>
        <div>
          <button className="m-2 p-2 bg-green-100" onClick={(e) => setY(y + 1)}>
            increase y
          </button>
          <span className="font-bold"> state = {y}</span>
        </div>
      </div>
    </>
  );
};

export default Demo2;
