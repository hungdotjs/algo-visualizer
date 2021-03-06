import { createContext, FC, useState } from "react";
import { TraceSpeed } from "services/Tracer";

type GlobalContextType = {
  listSize: number;
  setListSize: (value: number) => void;
  speed: TraceSpeed;
  setSpeed: (value: TraceSpeed) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const DEFAULT_SIZE = 10;
const DARK_MODE = localStorage.getItem("darkMode") === "true";

const GlobalContextProvider: FC = ({ children }) => {
  const [listSize, setListSize] = useState(DEFAULT_SIZE);
  const [speed, setSpeed] = useState<TraceSpeed>(TraceSpeed.NORMAL);
  const [darkMode, setDarkMode] = useState(DARK_MODE);

  return (
    <GlobalContext.Provider
      value={{ listSize, setListSize, speed, setSpeed, darkMode, setDarkMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
