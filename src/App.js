import Welcome from "./Components/Welcome";
import ".//App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./Components/Results";
import FilmView from "./Components/FilmView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/search" element={<Results />} />
          <Route path="/view/:id" element={<FilmView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
