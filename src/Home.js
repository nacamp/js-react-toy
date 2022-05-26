import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        React Intl : <FormattedMessage id="Where.Hello" />
      </div>
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
          <Link to="/ref">ref</Link>
        </li>
        <li>
          <Link to="/ref-class">ref(class)</Link>
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
        <li>
          <Link to="/redux">redux</Link>
        </li>
        <li>
          <Link to="/redux-class">redux(class)</Link>
        </li>
      </ul>
    </div>
  );
}
