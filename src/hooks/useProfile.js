import { useNavigate } from "react-router-dom";

export function useProfile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return {
    user,
    logout,
  };
}
