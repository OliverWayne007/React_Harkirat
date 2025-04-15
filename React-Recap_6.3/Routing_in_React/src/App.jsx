import  { BrowserRouter, Routes , Route } from 'react-router-dom';

import Landing from './pages/Landing';

import Dashboard from './pages/Dashboard';

import LandingNavbar from './components/LandingNavbar';

import DashboardNavbar from './components/DashboardNavbar'

import TopBar from './components/TopBar';

import './App.css';

function App() {

  return (

    <div id="App"> 

      {/* <div id="topBar">
        <div> This is the Global Topbar </div>
        <div className = "btnContainer">
          <button onClick = { () => { window.location.href = "/"; } }> Landing </button>
          <button onClick = { () => { window.location.href = "/dashboard"; } }> Dashboard </button>
        </div>
      </div> */}

      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path = "/" element = { <Landing Navbar = {LandingNavbar} /> } />
          <Route path='/dashboard' element = { <Dashboard Navbar = {DashboardNavbar} /> } />
        </Routes>
      </BrowserRouter>

    </div>

  )

}

export default App
