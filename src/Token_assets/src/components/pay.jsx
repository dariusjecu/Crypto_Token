import React, { useState, useEffect } from 'react';
import { Token } from "../../../declarations/Token"

export default function Pay() {

  const [message, setMessage] = useState("")

  async function Transfer() {
    const account = document.getElementById("transfer-id").value
    const amount = parseInt(document.getElementById("amount").value)
    if (amount > 0 && account != "") {
      document.getElementById("message").hidden = false
      setMessage("Proccessing...")
      const val = await Token.transfer(account, amount)
      setMessage(val)
    }
    else {
      document.getElementById("message").hidden = false
      setMessage("Enter a valid account and amount")
    }
  }

  useEffect(() => {
    if (message == "Success") {
      document.getElementById("transfer-id").value = ""
      document.getElementById("amount").value = ""
    }
  }, [message])

  return (
    <div className='pay content'>
      <h2>Transfer to other account: </h2>
      <div className='account'>
        <div className='box'>
          <p>Account: </p>
          <input id='transfer-id' type="text" />
        </div>
        <div className='box'>
          <p>Amount: </p>
          <input id='amount' type="number" />
        </div>
      </div>
      <button onClick={Transfer}>Transfer</button>
      <h3 id='message' hidden={true}>{message}</h3>
    </div>
  )
}
