// eslint-disable-next-line , max-classes-per-file,max-classes-per-file
import React from 'react';

class FancyInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focus = () => {
    this.inputRef.current.focus();
  };

  setValueForDemo = (v) => {
    this.inputRef.current.value = v;
  };

  render() {
    return (
      <input ref={this.inputRef}/>
    );
  }
}

function CustomTextInput(props) {
  return (
      <div>
        <input ref={props.inputRef2}/>
      </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.setValueForDemo('changed by parent');

    this.inputElement2.value = 'accessed dom by parent';
    this.inputElement3.value = 'access dom';
  }

  render() {
    return (
        <>
          <FancyInput
              ref={this.inputRef}
          />
          <CustomTextInput
              inputRef2={(el) => this.inputElement2 = el}
          />
          <input
              ref={(el) => this.inputElement3 = el}
          />
        </>
    );
  }
}

export default Parent;
