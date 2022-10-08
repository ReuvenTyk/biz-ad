import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../services/auth";

function LogOut() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  });
  function handleLogout() {}

  return (
    <a role="button" onClickCapture={handleLogout} className="nav-link hand">
      Log Out
    </a>
  );
}

export default LogOut;
