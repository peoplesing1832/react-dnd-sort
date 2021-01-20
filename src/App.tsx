import React, { useRef, useState } from 'react';
import useDrag from './hooks/useDrag';

function App() {
  const ref = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false);

  useDrag(ref, {
    index: 3,
  }, {
    dragstart: () => {
      setIsDragging(true)
    },
    dragend: () => {
      setIsDragging(false);
    }
  })

  return (
    <div className="App">
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          opacity: isDragging ? 0.5 : 1,
        }}
      />
    </div>
  );
}

export default App;
