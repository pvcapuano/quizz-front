import { useStateContext } from "@/hooks/useStateContext";
import React from "react";

const Quizz = () => {
  const { context, setContext } = useStateContext();

  return <div>Quizz</div>;
};

export default Quizz;
