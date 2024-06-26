import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BabyMath from './babyMath'
import NumberInputs from "./NumberInputs"
import InventoryMath from './inventoryMath'
import  InventoryMathInputs from './inventoryMathInputs'
function App() {

  return (
    <>
      <BabyMath />
      <NumberInputs />
        <hr />
        <h2>Inventory Math</h2>
        <InventoryMath />
       <InventoryMathInputs />
    </>
  )
}

export default App
