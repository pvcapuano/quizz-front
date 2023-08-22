import { useEffect, useState } from "react";
import useStateContext from "../../hooks/useStateContext";
import { createAPIEndpoint } from "../../api";
import { ENDPOINTS } from "../../constants/config";
import { useNavigate } from "react-router-dom";
import { getFormatedTime } from "../../helper";

interface Question {
  qnId: number;
  qnInWords: string;
  options: string[];
  imageName?: string | null;
}

const Questions = () => {
  const [qns, setQns] = useState<Question[]>([]);
  const [qnIndex, setQnIndex] = useState<number>(0);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const { context, setContext } = useStateContext();

  const navigate = useNavigate();

  let timer: NodeJS.Timeout;

  const startTimer = () => {
    timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, 1000);
  };

  const updateAnswer = (qnId: number, optionIdx: number) => {
    const temp = [...context.selectedOptions];
    temp.push({
      qnId,
      selected: optionIdx,
    });
    if (qnIndex < 4) {
      setContext({ selectedOptions: [...temp] });
      setQnIndex(qnIndex + 1);
    } else {
      setContext({ selectedOptions: [...temp], timeTaken });
      navigate("/result");
    }
  };

  useEffect(() => {
    setContext({
      timeTaken: 0,
      selectedOptions: [],
    });
    createAPIEndpoint(ENDPOINTS.questions)
      .fetch()
      .then((res) => {
        setQns(res.data);
        startTimer();
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return qns.length !== 0 ? (
    <div className="max-w-3xl mx-auto mt-5">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">
          Questão {qnIndex + 1} de 5
        </h2>
        <div className="mb-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  Progresso
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-teal-600">
                  {getFormatedTime(timeTaken)}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: `${(qnIndex + 1) * 20}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">{qns[qnIndex].qnInWords}</h3>
          <ul className="list-decimal list-inside mt-2">
            {qns[qnIndex].options.map((item: string, idx: number) => (
              <li
                key={idx}
                className="cursor-pointer mb-2"
                onClick={() => updateAnswer(qns[qnIndex].qnId, idx)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default Questions;
