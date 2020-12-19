import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
    </div>
  );
}
export default App;
