import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, View3D, Register } from "./components/pages";
import PackageSection from "./components/pages/PackageSection";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/View3D" element={<View3D />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<PackageSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
