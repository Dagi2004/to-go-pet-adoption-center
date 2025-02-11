import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

import About from "./components/pages/About";
import Resources from "./components/pages/Resources";
import Contact from "./components/pages/Contact";

const App: React.FC = () => {
    return(
        <>
         <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
        </Routes>
      
      
    </Router>

        </>
    )
}


export default App;
