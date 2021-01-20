import React, {
  useEffect,
  useCallback,
} from 'react';

type UseDropOptions = {
  hover?: (data: any) => void;
  drop?: (data: any) => void;
}

const useDrop = (el: React.RefObject<HTMLElement>, options?: UseDropOptions,) => {
  const {
    hover,
    drop,
  } = options || {};

  const handleDragEnter = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    let data!:any;
    if (e.dataTransfer) {
      data = e.dataTransfer.getData('data');
    }
    if (hover) {
      hover(data);
    }
  }, [hover]);

  const hanldeDragOver = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    let data!:any;
    if (e.dataTransfer) {
      data = e.dataTransfer.getData('data');
    }
    if (hover) {
      hover(data);
    }
  }, [hover]);

  const handleDrop = useCallback((e: globalThis.DragEvent) => {
    e.preventDefault();
    let data!:any;
    if (e.dataTransfer) {
      data = e.dataTransfer.getData('data');
    }
    if (hover) {
      hover(data);
    }
    if (drop) {
      drop(data);
    }
  }, [hover, drop]);

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
  }, [el, handleDragEnter, hanldeDragOver, handleDrop]);
};

export default useDrop;