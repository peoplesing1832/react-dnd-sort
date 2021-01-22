import React, { useState, useCallback } from 'react';
import { Flip, Flips, } from 'react-flip-transition';
import Card from './components/Card';
import './App.css';

function App() {
  const [list, setList] = useState([{
    id: 1,
    name: '极光',
    img: 'https://i.loli.net/2021/01/22/T3MkFLzjCgfGlKd.png',
  }, {
    id: 2,
    name: '灯塔',
    img: 'https://i.loli.net/2021/01/22/o4rkn82ANlhEfxc.png',
  }, {
    id: 3,
    name: '银杏',
    img: 'https://i.loli.net/2021/01/22/FUP4SNGXtB9edAE.png',
  }, {
    id: 4,
    name: '海滩',
    img: 'https://i.loli.net/2021/01/22/dxfuJCDTvXytU7G.png'
  }]);

  const move = useCallback((dropIndex: number, dragIndex: number) => {
    const drop = list[dropIndex];
    const drag = list[dragIndex];
    list[dropIndex] = drag;
    list[dragIndex] = drop;
    setList([...list]);
  }, [list]);

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
