import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";
import QuizNavbar from "./components/QuizNavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<QuizNavbar />}>
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
