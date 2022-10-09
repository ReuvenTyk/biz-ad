import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../services/auth";

function LogOut() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  });

  return <></>;
}

export default LogOut;
