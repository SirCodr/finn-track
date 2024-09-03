import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import SymbolsPage from './pages/symbols'
import Home from './pages/home'
import SavingsPage from './pages/savings'

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/symbol-profit' Component={SymbolsPage} />
          <Route path='/savings-compund-interest' Component={SavingsPage} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
