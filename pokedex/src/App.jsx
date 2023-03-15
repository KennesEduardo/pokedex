import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Info from './pags/Info'
import Regiao from './pags/Regiao'
import Types from './pags/Types'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Regiao/>}/>
        <Route path='/tipos' element={<Types/>}/>
        <Route path='/info/:nomePoke' element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
