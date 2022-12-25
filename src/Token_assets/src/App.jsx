import React from 'react';
import Header from "./components/header"
import Check from "./components/check"
import Gift from "./components/gift"
import Pay from "./components/pay"
import Account from "./components/account"

function App() {
  return (
    <div className='container'>
      <Header />
      <Gift />
      <Account />
      <Check />
      <Pay />
    </div>
  )
}

export default App
