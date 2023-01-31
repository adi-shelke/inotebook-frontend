import "./App.css";
import "./components/Home";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
function App() {
  return (
    // style={{marginLeft:"0px",marginRight:"0px",maxWidth:"100vw",paddingRight:"0px",paddingLeft:"0px"}}
    <div>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message="this is alert"/>
        <div className="container h-100" >
        <Routes>
          {/* <Route path="/*" element={<Login />} /> */}
          <Route path="/*" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />

        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
      </div>
  );
}
export default App;
