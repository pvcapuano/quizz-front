import { Outlet, useNavigate } from "react-router-dom";
import useStateContext from "../../hooks/useStateContext";

export default function Layout() {
  const { resetContext } = useStateContext();
  const navigate = useNavigate();

  const logout = () => {
    resetContext();
    navigate("/");
  };

  return (
    <>
      <header className="sticky top-0 bg-slate-700 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl uppercase font-bold">Quizz</h1>
            <button
              onClick={logout}
              className="text-white px-4 py-2 rounded-2xl bg-slate-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto py-4 px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
