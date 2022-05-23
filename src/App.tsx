import './App.css'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import TeamSection from './Components/TeamSection'

function App() {
  
  return (
    <div className="App">
      <div className="menu--view">
        <Menu />
      </div>
      <div className="header--view">
        <Banner />
      </div>
      <div className="team--view">
        <TeamSection />
      </div>
    </div>
  )
}

export default App
