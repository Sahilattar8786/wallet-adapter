import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';

const Airdrop = () => {
    const wallet=useWallet();  /* The useWallet hook provides the wallet variables inside The AirDrop Component because we wrapped Airdrop Component in WalletProvider */
    const {connection}=useConnection();
    const [amount,setAmount]=useState();
    async function sendAirDropTOUser(){
        await connection.requestAirdrop(wallet.publicKey, Number(amount) * 1e9)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setAmount(e.target.value)} placeholder='Amount'></input><button onClick={sendAirDropTOUser}>Send AirDrop</button>    
        </div>
    );
}

export default Airdrop;
