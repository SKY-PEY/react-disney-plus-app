import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

//key, ref는 예약어, 프랍으로 내리지 못함
const Test2 = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Test2;
