import React, { useState, useRef, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0); //렌더링O
  const countRef = useRef(0); //렌더링X, 렌더링 시 초기화X 컴포넌트생명주기동안 값이 유지
  let countVariable = 0; //렌더링X, 렌더링 시 초기화O

  const [value, setValue] = useState();

  const renderCountRef = useRef(0);

  //종속성 배열이 없으면 어떤 state든 변경되면 useEffect가 실행
  useEffect(() => {
    renderCountRef.current++;
  });

  const increaseRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  const increaseState = () => {
    setCount(prev => prev + 1);
  };

  const increaseVariable = () => {
    countVariable++;
    console.log(countVariable);
  };

  return (
    <div>
      <p>Ref {countRef.current}</p>
      <p>State {count}</p>
      <p>Variable {countVariable}</p>
      <p>Render {renderCountRef.current} </p>
      <input value={value} onChange={e => setValue(e.target.value)} />

      <div>
        <button onClick={increaseRef}> Ref +</button>
        <button onClick={increaseState}> State +</button>
        <button onClick={increaseVariable}> Variable +</button>
      </div>
    </div>
  );
};

export default Test;
