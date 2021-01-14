// https://ko.reactjs.org/docs/refs-and-the-dom.html
// https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle
// https://elfi-y.medium.com/react-callback-refs-a-4bd2da317269
import React, {
  // eslint-disable-next-line no-unused-vars
  useRef, useImperativeHandle, forwardRef, useEffect,
} from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    data: 'changed by parent',
    focus: () => {
      inputRef.current.focus();
    },
    setValueForDemo: (v) => {
      inputRef.current.value = v;
    },
  }));
  return <input ref={inputRef}/>;
});
export default function Parent() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setValueForDemo(inputRef.current.data);
  });
  return (
      <FancyInput
          ref={inputRef}
      />
  );
}
