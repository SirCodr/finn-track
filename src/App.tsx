import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SymbolsPage from './pages/symbols'
import Home from './pages/home'
import SavingsPage from './pages/savings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/symbol-profit' Component={SymbolsPage} />
        <Route path='/savings-compund-interest' Component={SavingsPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
