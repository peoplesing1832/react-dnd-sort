import React, { useRef } from 'react';
import useDrag from '../../hooks/useDrag';
import useDrop from '../../hooks/useDrop';
import './index.css';

type CardProps = {
  children: React.ReactNode
  index: number;
}

const Card: React.FC<CardProps> = (props) => {
  const { children, index } = props;

  const ref = useRef<HTMLDivElement>(null)

  const hover = (data: any) => {
    console.log('data->', data);
  };

  useDrag(ref, { index });
  useDrop(ref, {
    hover,
  });

  return (
    <div
      ref={ref}
      className="card"
    >
      { children }
    </div>
  )
};

export default Card;
