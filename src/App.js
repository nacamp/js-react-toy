import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import AcceptFile from './dragAndDrop/File';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dnd-file">drag and drop file</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/dnd-file" component={AcceptFile} />
    </div>
  );
}
export default App;
