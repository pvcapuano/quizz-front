import { useStateContext } from "@/hooks/useStateContext";
import React from "react";

const Question = () => {
  const { context, setContext } = useStateContext();

  return <div>question</div>;
};

export default Question;
