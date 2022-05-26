import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import AcceptFile from './dragAndDrop/File';
import Dnd from './dragAndDrop/Dnd';
import Ref from './ref/Ref';
import RefClass from './ref/RefClass';
import Hammer from './Hammer';
import Popup from './Popup';
import Material from './material/Parent';
import MaterialClass from './material/ParentClass';
import CssTransform from './gesture/CssTransform';
import RcGesture from './gesture/RcGesture';
import TodosContainer from './redux/TodosContainer';
import TodosContainerClass from './redux/TodosContainerClass';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/dnd-file" component={AcceptFile} />
      <Route path="/dnd" component={Dnd} />
      <Route path="/ref" component={Ref} />
      <Route path="/ref-class" component={RefClass} />
      <Route path="/hammer" component={Hammer} />
      <Route path="/popup" component={Popup} />
      <Route path="/material" component={Material} />
      <Route path="/material-class" component={MaterialClass} />
      <Route path="/gesture-css" component={CssTransform} />
      <Route path="/gesture" component={RcGesture} />
      <Route path="/gesture/:id" component={RcGesture} />
      <Route path="/redux" component={TodosContainer} />
      <Route path="/redux-class" component={TodosContainerClass} />
    </div>
  );
}
export default App;
