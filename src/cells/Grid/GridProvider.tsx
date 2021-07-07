import { createContext } from 'react';

interface GridContextProps {
  gap: number;
}
const GridContext = createContext<GridContextProps>({ gap: 24 });

export default GridContext;
