import { lazy , Suspense } from 'react';

// Suspense API provided by React is used for asynchronous Component fetching or asynchronous Data fetching while Lazy loading.

import  { BrowserRouter, Routes , Route } from 'react-router-dom';

import LandingNavbar from './components/LandingNavbar';

import DashboardNavbar from './components/DashboardNavbar';

const Dashboard = lazy( () => { return import("./pages/Dashboard") } )

const Landing = lazy( () => { return import("./pages/Landing") } )

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
        <Suspense fallback={<div> Loading... </div>} >
          <Routes>
            <Route path = "/" element = { <Landing Navbar = {LandingNavbar} /> } />
            <Route path="/dashboard" element = { <Dashboard Navbar = {DashboardNavbar} /> } />
          </Routes>
        </Suspense>
      </BrowserRouter>

    </div>

  )

}

export default App
