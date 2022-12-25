import React, { useState } from 'react';
import { Principal } from "@dfinity/principal"
import { Token } from "../../../declarations/Token"

export default function Check() {

  const [amount, setAmount] = useState(0)
  const [symbol, setSymbol] = useState("")
  const [hidden, setHidden] = useState(true)

  async function CheckAccount() {
    const account = document.querySelector("#id").value
    const principal = Principal.fromText(account)
    setAmount(parseInt(await Token.balanceOf(principal)))
    setSymbol(await Token.getSymbol())
    setHidden(false)
  }

  return (
    <div className='check content'>
      <h2>Check account token balance: </h2>
      <input id='id' type="text" />
      <button onClick={CheckAccount}>Check balance</button>
      <p hidden={hidden}>Your balance is: {amount} {symbol}</p>
    </div>
  )
}
