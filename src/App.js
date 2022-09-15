import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/custom-nav";
import Home from "./components/home";
import List from "./components/test";
import Register from "./components/register";
import Student from "./components/student";
import Login from "./components/login";


function App() {
  return (
    <div className="App">
      <CustomNav />
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<div>hello</div>} />
          <Route path="/student" element={<Student />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Register />} />
          <Route path="/student" element={<Student />} />
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;