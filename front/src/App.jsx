import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/inicio';
import Login from './Login';
import Registrate from './Registrate';
import Footer from './components/Footer';
import Tareas from './Tareas';
import Editar from './Editar';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Login' element={<Login />} />
            <Route path='/Tareas' element={<Tareas />} />
              <Route path='/Editar/:taskId' element={<Editar />} />
          <Route path='/Registrate' element={<Registrate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
