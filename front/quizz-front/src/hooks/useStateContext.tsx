/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface ContextType {
  participantId: number;
  timeTaken: number;
  selectedOptions: string[];
}

interface StateContextType {
  context: ContextType;
  setContext: Dispatch<SetStateAction<ContextType>>;
  resetContext: () => void;
}

export const stateContext = createContext<StateContextType | undefined>(
  undefined
);

const getFreshContext = (): ContextType => {
  const storedContext = localStorage.getItem("context");

  if (storedContext === null) {
    localStorage.setItem(
      "context",
      JSON.stringify({
        participantId: 0,
        timeTaken: 0,
        selectedOptions: [],
      })
    );

    return {
      participantId: 0,
      timeTaken: 0,
      selectedOptions: [],
    };
  }

  try {
    return JSON.parse(storedContext) as ContextType;
  } catch (error) {
    console.error("Error parsing stored context:", error);
    // Caso haja um erro ao fazer o parsing do valor do localStorage, retorne um valor padrão ou faça alguma ação apropriada.
    return {
      participantId: 0,
      timeTaken: 0,
      selectedOptions: [],
    };
  }
};

export default function useStateContext(): StateContextType {
  const contextValue = useContext(stateContext);
  if (!contextValue) {
    throw new Error("useStateContext must be used within a StateProvider");
  }

  const { context, setContext } = contextValue;
  return {
    context,
    setContext,
    resetContext: () => {
      localStorage.removeItem("context");
      setContext(getFreshContext());
    },
  };
}

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [context, setContext] = useState<ContextType>(getFreshContext());

  useEffect(() => {
    localStorage.setItem("context", JSON.stringify(context));
  }, [context]);

  const value: StateContextType = {
    context,
    setContext,
    resetContext: () => {
      localStorage.removeItem("context");
      setContext(getFreshContext());
    },
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
}
