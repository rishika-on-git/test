import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Layout from './pages/Layout.jsx';
import Register from './pages/Register/Register.jsx';
import Team from './pages/Team/Team.jsx';
// import Gallery from './pages/Gallery/Gallery.jsx';
import Codeofconduct from './pages/Codeofconduct/Codeofconduct.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/team' element={<Team />} />
          {/* <Route path='/gallery' element={<Gallery />} /> */}
          <Route path='/cod' element={< Codeofconduct/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
