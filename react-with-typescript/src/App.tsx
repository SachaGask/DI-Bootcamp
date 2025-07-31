import './App.css'
import Heading from './components/Heading'
import Section from './components/Section';

function App() {

  return (
    <>
    <h2>React + TS</h2>
    <Heading title={'Earthquake in Russia'} subtitle={'A major earthquake has struck Russia.'} />
    <Section>
        <h2> Don't go to the beach</h2>
    </Section>
    </>
  )
}

export default App
