import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dnd-file">drag and drop file</Link>
        </li>
        <li>
          <Link to="/dnd">drag and drop</Link>
        </li>
        <li>
          <Link to="/domref">DomRef</Link>
        </li>
        <li>
          <Link to="/callbackref">CallbackRef</Link>
        </li>
        <li>
          <Link to="/hammer">hammer</Link>
        </li>
        <li>
          <Link to="/material">material ui</Link>
        </li>
        <li>
          <Link to="/material-class">material ui(class)</Link>
        </li>
        <li>
          <Link to="/gesture-css">css transform</Link>
        </li>
        <li>
          <Link to="/gesture/1">gesture pinch</Link>
        </li>
        <li>
          <Link to="/gesture/2">gesture swipe</Link>
        </li>
      </ul>
    </div>
  );
}
