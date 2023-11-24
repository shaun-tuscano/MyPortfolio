import './App.css';
import Homepage from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/contact" element={<Contact />} />
				{/* <Route path="*" element={<Notfound />} /> */}
			</Routes>
    </div>
  );
}

export default App;
