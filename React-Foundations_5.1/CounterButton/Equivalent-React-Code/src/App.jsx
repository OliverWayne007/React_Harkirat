import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import CustomButton from './components/CustomButton';

function App() {

  const [count , setCount] = useState(100);
  
  return (
    <>
    <Button />
    <Button />
    <Button />
    <Button />
    <CustomButton count = {count} setCount = {setCount} />
    <CustomButton count = {count} setCount = {setCount} />
    <CustomButton count = {count} setCount = {setCount} />
    </>
  )

}

export default App