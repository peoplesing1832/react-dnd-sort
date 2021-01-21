import React, { useEffect, useCallback, useContext, } from 'react';
import { DndContext } from './DndProvider';

type UseDropOptions = {
  hover?: (data: any, e: globalThis.DragEvent) => void;
  drop?: (data: any, e: globalThis.DragEvent) => void;
}

const useDrop = (el: React.RefObject<HTMLElement>, options?: UseDropOptions,) => {
  const {
    hover,
    drop,
  } = options || {};

  const { data } = useContext(DndContext);

  const handleDragEnter = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    if (hover) {
      hover(data, e);
    }
  }, [hover, data]);

  const hanldeDragOver = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    if (hover) {
      hover(data, e);
    }
  }, [hover, data]);

  const handleDrop = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    if (hover) {
      hover(data, e);
    }
    if (drop) {
      drop(data, e);
    }
  }, [hover, drop, data]);

  useEffect(() => {
    let node!: HTMLElement;
    if (el.current) {
      node = el.current;
      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', hanldeDragOver);
      node.addEventListener('drop', handleDrop);
    }
    return () => {
      if (node) {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', hanldeDragOver);
        node.removeEventListener('drop', handleDrop);
      }
    };
  }, [el, handleDragEnter, hanldeDragOver, handleDrop, data]);
};

export default useDrop;
