import './App.css'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import List from './Components/List'

function App() {
  
  return (
    <div className="App">
      <div className="menu--view">
        <Menu />
      </div>
      <div className="header--view">
        <Banner />
      </div>
      <div className="Team--view">
        <List />
      </div>
    </div>
  )
}

export default App
