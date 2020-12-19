import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// itemtype
const ItemTypes = {
  BOX: 'box',
  CIRCLE: 'circle',
};

// box
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};
export const Box = ({
  id, left, top, hideSourceOnDrag, children,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    item: {
      id, left, top, type: ItemTypes.BOX,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  console.log('box:', left, top);
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  );
};

// container
const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
};
const Container = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' },
  });

  const moveBox = (id, left, top) => {
    console.log('moveBox:', id, left, top);
    setBoxes(update(boxes, {
      [id]: {
        $merge: { left, top },
      },
    }));
  };
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      return undefined;
    },
  });

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box key={key} id={key} left={left} top={top} hideSourceOnDrag={hideSourceOnDrag}>
            {title}
          </Box>
        );
      })}
    </div>
  );
};

// example
const Example = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ]);
  return (
    <div>
      <Container hideSourceOnDrag={hideSourceOnDrag} />
      <p>
        <label htmlFor="hideSourceOnDrag">
          <input id="hideSourceOnDrag" type="checkbox" checked={hideSourceOnDrag} onChange={toggle} />
          <small>Hide the source item while dragging</small>
        </label>
      </p>
    </div>
  );
};

function Dnd() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default Dnd;
