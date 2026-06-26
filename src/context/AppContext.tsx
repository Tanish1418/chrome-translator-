import {
  createContext,
  useContext,
  useState
} from "react";

const AppContext =
  createContext<any>(null);

export function AppProvider(
  { children }: any
) {
  const [
    currentResult,
    setCurrentResult
  ] = useState("");

  const [
    history,
    setHistory
  ] = useState([]);

  return (
    <AppContext.Provider
      value={{
        currentResult,
        setCurrentResult,
        history,
        setHistory
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}