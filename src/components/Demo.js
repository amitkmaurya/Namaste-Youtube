import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]) 

  return (
    <>
      <div
        className={
          "p-3 w-96 h-96 border border-grey rounded-md " + 
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <div className="flex justify-center">
        <button className="m-2 p-2 bg-green-200" onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <input
          className="px-2 w-72 border text-black border-black rounded-sm"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>prime - {prime}</h1>
      </div>
    </>
  );
};

export default Demo;
