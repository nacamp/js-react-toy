// https://ko.reactjs.org/docs/refs-and-the-dom.html
// https://yzzzzun.tistory.com/38
// https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle
// https://elfi-y.medium.com/react-callback-refs-a-4bd2da317269
// eslint-disable-next-line no-unused-vars
import React, {
  // eslint-disable-next-line no-unused-vars
  useRef, useImperativeHandle, forwardRef,
} from 'react';

function CustomTextInput(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <input ref={props.inputRef} />
    </div>
  );
}

class ClassParent extends React.Component {
  render() {
    if (this.inputElement) {
      this.inputElement.value = 'parent';
      this.inputElement.focus();
    }
    return (
      <CustomTextInput
        inputRef={(el) => this.inputElement = el}
      />
    );
  }
}

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    setValue: (x) => {
      inputRef.current.value = x;
    },
  }));
  return <input ref={inputRef} />;
}
// eslint-disable-next-line no-undef,no-unused-vars,no-func-assign
FancyInput = forwardRef(FancyInput);
function FunctionParent() {
  const inputRef = useRef();

  if (inputRef && inputRef.current) {
    console.log(inputRef.current);
    inputRef.current.setValue('parent');
    inputRef.current.focus();
  }
  return (
    <FancyInput
      ref={inputRef}
    />
  );
}

function Parent() {
  return (
    <>
      <FunctionParent />
      <ClassParent />
    </>
  );
}

export default Parent;
