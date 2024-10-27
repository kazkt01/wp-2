import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Develop from "./pages/Develop";
import Design from "./pages/Design";
import Contact from "./pages/Contact";
import Applayout from "./layout/Applayout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/develop" element={<Develop />} />
              <Route path="/design" element={<Design />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
