import React, { useState } from 'react';
import { Flip, Flips, } from 'react-flip-transition';
import Card from './components/Card';
import './App.css';

function App() {
  const [list, setList] = useState([{
    id: 1,
    name: 'Saoirse Ronan',
    img: 'https://i.loli.net/2021/01/22/VyYKwmzD49fsaOR.jpg',
  }, {
    id: 2,
    name: 'Emma Watson',
    img: 'https://i.loli.net/2021/01/22/uUFflQtmVS2andL.jpg',
  }, {
    id: 3,
    name: 'Margot Robbie',
    img: 'https://i.loli.net/2021/01/22/QwbmaFL5CyiGNK3.jpg',
  }]);

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
              <Flip key={item.id}>
                <div>
                  <Card
                    img={item.img}
                    name={item.name}
                    index={index}
                    move={move}
                  />
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
