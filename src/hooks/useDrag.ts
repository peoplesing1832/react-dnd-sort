import React, {
  useEffect,
} from 'react';

type useDragOptions = {
  dragstart: () => void; // 开始拖拽时触发
  dragend: () => void; // 拖拽停止时触发

}

const useDrag = (
  el: HTMLElement,
  data: any,
  options: useDragOptions,
) => {

  const handleDragstart = (e: DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData('data', data);
    }
  };

  const handleDragEnd = (e: DragEvent) => {
  };

  useEffect(() => {
    el.addEventListener('dragstart', handleDragstart);
    el.addEventListener('dragend', handleDragEnd);
    return () => {
      el.removeEventListener('dragstart', handleDragstart);
      el.removeEventListener('dragend', handleDragEnd);
    };
  }, [el]);
};

export default useDrag;