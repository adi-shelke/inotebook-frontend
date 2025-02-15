import { Notes } from "./Notes";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate()
  if(!localStorage.getItem('token'))
  {
    navigate("/login")
  } 
  return (
    <div>
      <Notes />
    </div>
  );
};
