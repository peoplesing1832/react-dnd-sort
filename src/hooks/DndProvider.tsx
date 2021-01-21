import React, {
  useState,
  useCallback,
} from 'react';

type DndContextProps = {
  data: any;
  register: (data: any) => void;
}

export const DndContext = React.createContext<DndContextProps>({
  data: null,
  register: (data: any) => {}
});

const DndProvider: React.FC = (props) => {
  const { children } = props;

  const [data, setData] = useState<any>(null);

  const register = useCallback((data) => {
    setData(data);
  }, []);

  return (
    <DndContext.Provider
      value={{
        data,
        register,
      }}
    >
      { children }
    </DndContext.Provider>
  );
};

export default DndProvider;
