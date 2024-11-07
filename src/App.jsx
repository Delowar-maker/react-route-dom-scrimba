import { Route, Routes } from "react-router-dom";
import "../server";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetail from "./pages/VanDetail";
import Vans from "./pages/Vans";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
