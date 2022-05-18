import './App.css'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import TeamList from './Components/TeamList'

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
        <TeamList />
      </div>
    </div>
  )
}

export default App
