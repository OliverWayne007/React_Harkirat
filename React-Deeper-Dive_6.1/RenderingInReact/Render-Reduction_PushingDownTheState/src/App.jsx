import './App.css'
import Header from './components/Header';
import HeaderWithButton from './components/HeaderWithButton';

function App() {

  console.log("App component re-rendered.");

  return (
    <>
    <HeaderWithButton name = "Harkirat" />
    <Header name = "Piyush" />
    </>
  )

}

export default App;