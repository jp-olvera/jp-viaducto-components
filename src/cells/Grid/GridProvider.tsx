import { createContext } from 'react';

interface GridContextProps {
  gap: number;
  innerGap: number;
}
const GridContext = createContext<GridContextProps>({ gap: 24, innerGap: 0 });

export default GridContext;
