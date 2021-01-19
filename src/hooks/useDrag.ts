import React, {
  useEffect,
  useCallback,
} from 'react';

type useDragOptions = {
  dragstart: () => void; // 开始拖拽时触发
  dragend: () => void; // 拖拽停止时触发

}

const useDrag = (
  el: HTMLElement, // 拖拽的元素
  data: any, // 拖拽的数据
  options: useDragOptions,
) => {

  const handleDragstart = useCallback((e: DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData('data', data);
    }
  }, [data]);

  const handleDragEnd = useCallback((e: DragEvent) => {
  }, []);

  useEffect(() => {
    el.addEventListener('dragstart', handleDragstart);
    el.addEventListener('dragend', handleDragEnd);
    return () => {
      el.removeEventListener('dragstart', handleDragstart);
      el.removeEventListener('dragend', handleDragEnd);
    };
  }, [el, handleDragstart, handleDragEnd]);
};

export default useDrag;