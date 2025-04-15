import './App.css'
import CardWrapper from './components/CardWrapper'
import TextComponent from './components/TextComponent'
import NumberComponent from './components/NumberComponent'

// A wrapper-component is a component which accepts some other component as a prop.
// Here, the CardWrapper component is the wrapper component.
// CardWrapper component accepts the "TextComponent" and "NumberComponent" as props separately.

// Basically, the styling of the CardWrapper component remains the same and only the content rendered inside it changes
// depending on the component it accepts as prop.

function App() {
  return (
    <>
    <CardWrapper Component = {TextComponent} />
    <CardWrapper Component = {NumberComponent} />
    </>
  )
}

export default App
