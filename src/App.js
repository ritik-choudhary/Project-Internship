import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ChartsData from './components/ChartsData'
import ApplicationsBar from './components/ApplicationsBar'

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='dashboard'>
        <div className='search-section'>
          <SearchBar />
        </div>
        <div className='dashboard-content'>
          <div className='left-part'>
            <ChartsData />
          </div>
          <div className='right-part'>
            <ApplicationsBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
