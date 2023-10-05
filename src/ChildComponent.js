import React, { forwardRef } from "react";

const ChildComponent = (props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

export default forwardRef(ChildComponent);

//forwardRef를 사용하면, 두번째 매개변수로 ref를 받아올 수 있음
// 다만 자주 사용하진 않음
// 사실 그냥 내릴때 ref말고 다른 이름으로 내리면 됨
// 'ref'라는 이름만 안쓰면 됨(haha={inputRef}})
