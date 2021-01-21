import React, { useState } from 'react';
import { Flip, Flips, } from 'react-flip-transition';
import Card from './components/Card';
import './App.css';

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
      <Flips
        name="flip1"
      >
        {
          list.map((item, index) => {
            return (
              <Flip key={item}>
                <div>
                  <Card
                    index={index}
                    move={move}
                  >
                    { item }
                  </Card>
                </div>
              </Flip>
            )
          })
        }
      </Flips>
    </div>
  );
}

export default App;
