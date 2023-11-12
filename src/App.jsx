import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Ajuda from './pages/Ajuda'
import Configuracao from './pages/Configuracao'
import Dicionario from './pages/Dicionario'
import Estudo from './pages/Estudo'
import Historico from './pages/Historico'
import Leitura from './pages/Leitura'
import Mapa from './pages/Mapa'
import Pesquisa from './pages/Pesquisa'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Leitura />} />
      <Route path="pesquisa" element={<Pesquisa />} />
      <Route path="mapa" element={<Mapa />} />
      <Route path="historico" element={<Historico />} />
      <Route path="estudo" element={<Estudo />} />
      <Route path="dicionario" element={<Dicionario />} />
      <Route path="configuracao" element={<Configuracao />} />
      <Route path="ajuda" element={<Ajuda />} />
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
