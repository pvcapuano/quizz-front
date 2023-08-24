import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";
import QuizNavbar from "./components/QuizNavBar";
import Authenticate from "./components/Authenticate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          <Route path="/" element={<QuizNavbar />}>
            <Route path="/questions" element={<Questions />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
