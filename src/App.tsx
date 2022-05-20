import './App.css'
import Banner from './Components/Banner'
import Menu from './Components/Menu'

function App() {
  
  return (
    <div className="App">
      <div className="menu--view">
        <Menu />
      </div>
      <div className="header--view">
        <Banner />
      </div>
    </div>
  )
}

export default App
