import "./Style.css";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/common/PageNotFound";
import Footer from "./components/common/Footer";
import About from "./components/About";
import HeadTail from "./components/HeadTail";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/headtail" element={<HeadTail/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
