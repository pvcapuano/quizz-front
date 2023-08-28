import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="">
      pagina principal
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LandingPage;
