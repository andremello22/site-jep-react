import './App.css'
import Layout from './components/layout'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;