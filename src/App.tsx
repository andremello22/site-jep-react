import './App.css'
import Layout from './components/layout'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/pages/home';
import { Servicos } from './components/pages/servicos';
import { Sobre } from './components/pages/sobre';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} /> 
          <Route path="/pages/servicos" element={<Servicos />} />
          <Route path='/pages/sobre' element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;