import { useState , useEffect } from 'react'

function App() {

  const [bankData , setBankData] = useState( {} );
  const [exchangeData , setExchangeData] = useState( {} );

  useEffect( () => {
    setTimeout( () => {
      setBankData( { income: 100 } );
    } , 3000)
  } , [] );

  useEffect( () => {
    setTimeout( () => {
      setExchangeData( { returns: 100 } );
    } , 1000)
  } , [] );

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  console.log("The App component re-rendered...");

  return (
    <div>
      Hi there, your income tax returns are: {incomeTax}
    </div>
  )
}

export default App
