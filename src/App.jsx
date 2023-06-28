import { useState } from 'react'
import './App.css'
import AnswerForm from './components/AnswerForm'
import Form from './components/Form'

function App() {
  const [tmb, setTmb] = useState()
  const [get, setGet] = useState()

  const updateResult = (TMB, GET) => {
    setTmb(TMB)
    setGet(GET)
  }


  return (
    <div className='diet'>
      <h1>Diet Calculator</h1>
      <Form updateResult={updateResult}/>
      <AnswerForm tmb={tmb} get={get}/>
    </div>
  )
}

export default App
