import './App.css'
import Banner from './Components/Banner'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import Team from './Components/Team'

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
        <Team />
      </div>
      <div className="footer--view">
        <Footer />
      </div>
    </div>
  )
}

export default App
