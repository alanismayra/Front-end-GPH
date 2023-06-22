import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './pages/home/Home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import Postagens from './pages/postagens/Postagens';
import Contato from './pages/contato/Contato';

import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>



  );
}

export default App;
