import React, { useRef } from 'react';
import useDrag from '../../hooks/useDrag';
import useDrop from '../../hooks/useDrop';
import './index.css';

type CardProps = {
  children: React.ReactNode
  index: number;
  move: (dropIndex: number, dragIndex: number) => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { children, index, move } = props;

  const ref = useRef<HTMLDivElement>(null)

  const hover = (data: any, e: globalThis.DragEvent) => {
    const dropIndex = index;
    const { index: dragIndex } = data;
    if (dropIndex === dragIndex) {
      return;
    }
    if (!ref.current) {
      return;
    }
    const dropRect = ref.current?.getBoundingClientRect();
    const dropMiddY = dropRect.bottom - dropRect.top;
    const dropY = e.pageY - dropRect.top;
    if (dragIndex < dropIndex && dropY < dropMiddY) {
      return
    }
    if (dragIndex > dropIndex && dropY > dropMiddY) {
      return
    }
    move(dropIndex, dragIndex);
    data.index = dropIndex;
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
