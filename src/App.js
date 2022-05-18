import Home from './Components/Home/Home';
import FavList from './Components/FavList/FavList';
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite-list" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
