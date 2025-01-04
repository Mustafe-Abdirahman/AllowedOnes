import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import Service from "./pages/Service";
import PricingTable from "./pages/Price";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PricingTable" element={<PricingTable />} />
        <Route path="/" element={<Service />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
