
import { BrowserRouter,Routes, Route} from "react-router-dom";
import React from "react";
import Home from "./components/home";
import Student from "./components/Student";
import Contact from "./components/contact";
import Homes from "./Homes";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Home/>
    <Routes>
      <Route path="/home" element={<Homes/>}></Route>
      <Route path="/student" element={<Student/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<Error/>}></Route>
        
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
