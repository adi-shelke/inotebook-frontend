import "./App.css";
import "./components/Home";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message="this is alert"/>
        <div className="container">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="about/*" element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}
export default App;
