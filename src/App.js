import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import AcceptFile from './dragAndDrop/File';
import Dnd from './dragAndDrop/Dnd';
import DomRef from './ref/DomRef';
import CallbackRef from './ref/CallbackRef';
import Hammer from './Hammer';
import Popup from './Popup';
import Material from './material/Parent';
import MaterialClass from './material/ParentClass';
import CssTransform from './gesture/CssTransform';
import RcGesture from './gesture/RcGesture';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/dnd-file" component={AcceptFile} />
      <Route path="/dnd" component={Dnd} />
      <Route path="/domref" component={DomRef} />
      <Route path="/callbackref" component={CallbackRef} />
      <Route path="/hammer" component={Hammer} />
      <Route path="/popup" component={Popup} />
      <Route path="/material" component={Material} />
      <Route path="/material-class" component={MaterialClass} />
      <Route path="/gesture-css" component={CssTransform} />
      <Route path="/gesture/:id" component={RcGesture} />
    </div>
  );
}
export default App;
