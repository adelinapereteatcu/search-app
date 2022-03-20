import { Search } from "./components/Search";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h2>React App Basic Search</h2>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
