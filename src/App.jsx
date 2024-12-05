import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { useContext } from 'react'
import { Counter } from './components/Counter'
import { CounterContext } from './components/context/Counter'
import { Context_Provider } from './components/context/Context_houes'
import { Button_click } from './components/button_click'
import { ThemeProvider } from './components/context/Dark_Light'
import { Dark } from './components/Dark'
  

function App() {

// const counterState = useContext(CounterContext)

// console.log('context',counterState)
  return (
    <div>

<ThemeProvider>

  <Dark/>

</ThemeProvider>
      {/* <Context_Provider>
         <Button_click/>
      </Context_Provider> */}

{/*     
  <h1>Count is {counterState.count}</h1>  
<Counter/>
<br/>
<Counter/>
<br/>
<Counter/> */}


    </div>
  )
}

export default App
