import React, { useState } from 'react';
import { Principal } from "@dfinity/principal"
import { Token } from "../../../declarations/Token"

export default function Account() {

    async function Check() {
        document.getElementById("account").value = "Processing..."
        const account = await Token.getAccount()
        console.log(account)
        document.getElementById("account").value = account
    }

    return (
        <div className='check content'>
            <h2>See your account username: </h2>
            <input id='account' type="text" />
            <button onClick={Check}>Check account</button>
        </div>
    )
}
