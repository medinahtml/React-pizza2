import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import BasketPage from './pages/BasketPage'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
 

  return (
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/basket" element={<BasketPage/>}/>
    </Routes>
  </Router>
  </Provider>
  )
}

export default App
