import { useEffect, useCallback, useContext, } from 'react';
import { DndContext } from './DndProvider';

type UseDragOptions = {
  dragstart?: (e: globalThis.DragEvent) => void;
  dragend?: (e: globalThis.DragEvent) => void;
  drag?: (e: globalThis.DragEvent) => void;
}

const useDrag = (el: React.RefObject<HTMLElement>, data: any, options?: UseDragOptions,) => {
  const {
    dragstart,
    dragend,
    drag,
  } = options || {};

  const { register } = useContext(DndContext);

  const handleDragstart = useCallback((e: globalThis.DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'copyMove'; 
      e.dataTransfer.dropEffect = 'move';
      register(data);
    }
    if (dragstart) {
      dragstart(e);
    }
  }, [data, dragstart, register]);

  const handleDragEnd = useCallback((e: globalThis.DragEvent) => {
    if (dragend) {
      dragend(e);
    }
  }, [dragend]);

  const handleDrag = useCallback((e: globalThis.DragEvent) => {
    if (drag) {
      drag(e);
    }
  }, [drag]);

  useEffect(() => {
    let node!: HTMLElement;
    if (el.current) {
      node = el.current;
      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragstart);
      node.addEventListener('dragend', handleDragEnd);
      node.addEventListener('drag', handleDrag);
    }
    return () => {
      if (node) {
        node.removeEventListener('dragstart', handleDragstart);
        node.removeEventListener('dragend', handleDragEnd);
        node.removeEventListener('drag', handleDrag);
      }
    };
  }, [el, handleDragstart, handleDragEnd, handleDrag]);
};

export default useDrag;
