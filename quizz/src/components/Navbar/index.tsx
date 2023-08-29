import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className="sticky top-0 bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl text-amber-500 uppercase font-bold">
              AWS Quizz
            </h1>
            <div className="flex justify-between items-center w-2/5 md:w-1/4 text-gray-100 text-sm md:text-md lg:text-xl ">
              <h1>Sobre</h1>
              <h1>Material</h1>
              <button onClick={handleLogin}>Simulado</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
