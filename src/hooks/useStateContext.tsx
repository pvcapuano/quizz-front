"use client";
import React, { createContext, useContext, useState } from "react";

export const stateContext = createContext();

export function useStateContext() {
  const { context, setContext } = useContext(stateContext);

  return {
    context,
    setContext: (obj) => {
      setContext({ ...context, ...obj });
    },
  };
}

const getFreshContent = () => {
  return {
    participantId: 0,
    timeTaken: 0,
    selectedOptions: [],
  };
};

export function ContextProvider({ children }: any) {
  const [context, setContext] = useState(getFreshContent());
  return (
    <stateContext.Provider value={{ context, setContext }}>
      {children}
    </stateContext.Provider>
  );
}
