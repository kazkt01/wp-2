import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Develop from "./page/Develop";
import Design from "./page/Design";
import Contact from "./page/Contact";
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
