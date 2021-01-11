import React, { useRef, useEffect } from 'react';
import Gesture from 'rc-gesture';

export default function RcGesture({ match }) {
  const { id } = match.params;
  const lastScale = useRef(1);
  const canvasBox = useRef();
  const pincher = useRef();

  const handleSwipe = (e, type) => {
    if (type === 'end') {
      pincher.current.style.transform = ['translateX(0px)'];
    } else {
      const { srcEvent, moveStatus } = e;
      const { x } = moveStatus;
      console.log(x);
      pincher.current.style.transform = [`translateX(${x}px)`];
      srcEvent.preventDefault();
    }
  };

  const handlePinch = (e, type) => {
    console.log(type);
    let scale = e.scale * lastScale.current;
    if (scale < 0.5) {
      scale = 0.5;
    } else if (scale > 2) {
      scale = 2;
    }
    if (e.touches.length === 2) {
      lastScale.current = scale;
      console.log(e.touches.length, lastScale.current);
      let transform = [];
      transform.push(`scale(${scale})`);
      transform = transform.join(' ');
      console.log(transform);
      pincher.current.style.transform = transform;
    }
  };

  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight);
    canvasBox.current.style.width = `${window.innerWidth}px`;
    canvasBox.current.style.height = `${window.innerHeight}px`;
    canvasBox.current.style.backgroundColor = 'blue';
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  if (id === 1) {
    return (
      <div ref={canvasBox} id="canvasBox" style={{ margin: 0 }}>
        <div style={{ height: '100px' }}> </div>
        <Gesture
          enablePinch
          onPinch={(e) => { handlePinch(e, 'pinch'); }}
          onPinchStart={(e) => { handlePinch(e, 'start'); }}
          onPinchEnd={(e) => { handlePinch(e, 'end'); }}
          onTouchMove={() => { console.log('still run touch move'); }}
        >
          <div
            ref={pincher}
            style={{
              transform: 'scale({lastScale.current})',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '200px',
              height: '300px',
              backgroundColor: 'red',
            }}
          />
        </Gesture>

      </div>
    );
  }
  return (
    <div ref={canvasBox} id="canvasBox" style={{ margin: 0 }}>
      <div style={{ height: '100px' }}> </div>
      <Gesture
        direction="horizontal"
        onPanMove={(e) => { handleSwipe(e, 'start'); }}
        onPanEnd={(e) => { handleSwipe(e, 'end'); }}
        onTouchMove={() => { console.log('still run touch move'); }}
      >
        <div
          ref={pincher}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '350px',
            height: '500px',
            backgroundColor: 'red',
          }}
        />
      </Gesture>

    </div>
  );
}
