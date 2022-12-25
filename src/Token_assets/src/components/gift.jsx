import React, { useState, useEffect } from 'react';
import { Token } from "../../../declarations/Token"

export default function Gift() {

  const [claimed, setClaimed] = useState("Claim your tokens")
  const [disable, setDisable] = useState(false)

  async function Claim(event) {
    event.target.disabled = true;
    setClaimed(await Token.payOut())
  }

  return (
    <div className='gift content'>
      <h2>Get tokens!</h2>
      <p>Click here and claim 1000 DARK tokens for free: </p>
      <button disabled={disable} onClick={Claim}>{claimed}</button>
    </div>
  )
}
