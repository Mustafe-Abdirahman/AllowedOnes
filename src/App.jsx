import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import Service from "./pages/Service";
import PricingTable from "./pages/Price";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PricingTable" element={<PricingTable />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
