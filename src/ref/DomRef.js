import React, { useEffect, useRef, useState } from 'react';

function myFunction() {
  alert('clicked 1');
  document.getElementById('input1').value = 'clicked 1';
}
const DomRef = () => {
  useEffect(() => {
    document.getElementById('btnId1').removeEventListener('click', myFunction, true);
    document.getElementById('btnId1').addEventListener('click', myFunction);
  });
  const input2 = useRef();
  const onClick2 = () => {
    alert('clicked 2');
    input2.current.value = 'clicked 2';
  };
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick3 = () => {
    alert('clicked 3');
    setText('clicked 3');
  };
  return (
    <div id="divId">
      <button type="button" id="btnId1"> click1 </button>
      <input id="input1" />
      <br />
      <button type="button" onClick={onClick2}> click2 </button>
      <input ref={input2} />
      <br />
      <button type="button" onClick={onClick3}> click3 </button>
      <input value={text} onChange={onChange} />
    </div>
  );
};

export default DomRef;
