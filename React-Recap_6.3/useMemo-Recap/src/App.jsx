import { useState , useEffect, useMemo } from 'react'

function App() {

  const [exchangeData1 , setExchangeData1] = useState( {} );
  const [exchangeData2 , setExchangeData2] = useState( {} );
  const [bankData , setBankData] = useState( {} );

  useEffect( () => {
    // some operation to get the data
    setExchangeData1( { returns: 100 } );
    // setExchangeData2( { returns: 100 } );
  } , [] );

  useEffect( () => {
    // some operation to get the data
    setExchangeData2( { returns: 100 } );
  } , [] );

  useEffect( () => {
    // some operation to get the data
    setTimeout( () => {
      setBankData( { income: 100 } );
    } , 5000);
  } , [] );


  
  const cryptoReturns = useMemo( () => { 
    console.log("Hi there before !");
    // Expensive operation that we want to memoize.
    // We want the following operation to only happen if either exchangeData1 changes or exchangeData2 changes
    const cryptoReturns =  exchangeData1.returns + exchangeData2.returns;
    console.log("Hi there after !");
    return cryptoReturns;
  } , [exchangeData1 , exchangeData2] );


  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      <p> Hi there, your income tax returns are: {incomeTax} </p>
    </div>
  )
}

export default App


// const memoizedValue = useMemo( func , [dependencies] ); -----> returns a memoized value
// const memoizedFunction = useCallback( func , [dependencies] ); ---> returns a memoized function