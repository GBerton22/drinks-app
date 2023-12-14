import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Favorites from "./screens/Favorites";
import Detail from "./screens/Detail";
import Results from "./screens/Results";
import NotFound404 from "./screens/NotFound404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:idCategory" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:idDetail" element={<Detail />} />
        <Route path="/results/:query" element={<Results />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
