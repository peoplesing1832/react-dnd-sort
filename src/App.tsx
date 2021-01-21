import React, { useState } from 'react';
import Card from './components/Card';

function App() {

  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const move = (dropIndex: number, dragIndex: number) => {
    const drop = list[dropIndex];
    const drag = list[dragIndex];
    list[dropIndex] = drag;
    list[dragIndex] = drop;
    setList([...list]);
  };

  return (
    <div className="App">
      {
        list.map((item, index) => {
          return (
            <Card
              index={index}
              move={move}
              key={item}
            >
              { item }
            </Card>
          )
        })
      }
    </div>
  );
}

export default App;
