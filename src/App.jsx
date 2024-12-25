import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Price />} />
        <Route path="/" element={<Service />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
