/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createAPIEndpoint } from "../../api";
import { ENDPOINTS } from "../../constants/config";
import { getFormatedTime } from "../../helper";
import useStateContext from "../../hooks/useStateContext";
import Answer from "../Answer";

interface AnswerType {
  qnId: number;
  selected: number;
  answer: number;
}

export default function Result() {
  const { context, setContext } = useStateContext();
  const [score, setScore] = useState<number>(0);
  const [qnAnswers, setQnAnswers] = useState<AnswerType[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ids = context.selectedOptions.map((x) => x.qnId);
    createAPIEndpoint(ENDPOINTS.getAnswers)
      .post(ids)
      .then((res) => {
        console.log(res.data);
        const qna = context.selectedOptions.map((x) => ({
          ...x,
          ...res.data.find((y) => y.qnId === x.qnId),
        }));
        setQnAnswers(qna);
        calculateScore(qna);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateScore = (qna: AnswerType[]) => {
    const tempScore = qna.reduce((acc, curr) => {
      return curr.answer === curr.selected ? acc + 1 : acc;
    }, 0);
    setScore(tempScore);
  };

  const restart = () => {
    setContext({
      timeTaken: 0,
      selectedOptions: [],
    });
    navigate("/questions");
  };

  const submitScore = () => {
    createAPIEndpoint(ENDPOINTS.participant)
      .put(context.participantId, {
        participantId: context.participantId,
        score: score,
        timeTaken: context.timeTaken,
      })
      .then((_res) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-5 flex flex-col shadow-2xl p-4">
      <div className="flex flex-col flex-grow">
        <div className="flex-1 text-center">
          <h4 className="text-3xl font-bold">Parabéns!</h4>
          <h6 className="text-xl">Sua pontuação:</h6>
          <h5 className="font-semibold">
            <span className="text-green-500">{score}</span>/5
          </h5>
          <h6 className="text-xl">
            Feito em {getFormatedTime(context.timeTaken) + " mins"}
          </h6>
          <button
            className="mx-1 mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={submitScore}
          >
            Submit
          </button>
          <button
            className="mx-1 mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={restart}
          >
            Re-try
          </button>
          <div
            className={`bg-green-200 px-4 py-2 mt-2 mx-auto ${
              showAlert ? "visible" : "hidden"
            }`}
          >
            Score Updated.
          </div>
        </div>
      </div>
      <Answer qnAnswers={qnAnswers} />
    </div>
  );
}
