import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SystemProgram, Transaction ,PublicKey} from '@solana/web3.js';
import React, { useState } from 'react';

const SendSol = () => {
    const {connection}=useConnection();
    const wallet=useWallet();
    const [receipt,setreceipt]=useState('');
    const [amount,setAmount]=useState('');

    const sendSol = async () => {
        if (!wallet.publicKey || !wallet.signTransaction) {
            alert("Please connect your wallet.");
            return;
        }
    
        let toPubkey;
        try {
            toPubkey = new PublicKey(receipt);
        } catch (err) {
            alert("Invalid recipient address");
            return;
        }
    
        const lamports = Number(amount) * 1e9;
        if (isNaN(lamports) || lamports <= 0) {
            alert("Enter a valid amount");
            return;
        }
    
        try {
            // Optional: check wallet balance
            const balance = await connection.getBalance(wallet.publicKey);
            if (balance < lamports) {
                alert("Insufficient balance");
                return;
            }
    
            // Create transaction
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey,
                    lamports,
                })
            );
    
            // Get blockhash and height for confirmation strategy
            const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = wallet.publicKey;
    
            // Sign and send transaction
            const signed = await wallet.signTransaction(transaction);
    
            let signature;
            try {
                signature = await connection.sendRawTransaction(signed.serialize());
            } catch (sendErr) {
                console.error("sendRawTransaction failed", sendErr);
                alert("Transaction sending failed: " + (sendErr.message || sendErr.toString()));
                return;
            }
    
            // Confirm transaction using strategy
            try {
                await connection.confirmTransaction(
                    {
                        signature,
                        blockhash,
                        lastValidBlockHeight
                    },
                    'confirmed'
                );
            } catch (confirmErr) {
                console.error("Transaction confirmation failed", confirmErr);
                alert("Transaction sent but confirmation failed: " + (confirmErr.message || confirmErr.toString()));
                return;
            }
    
            alert("Transaction successful! Signature: " + signature);
        } catch (err) {
            console.error("Send SOL failed", err);
            alert("Transaction failed: " + (err.message || err.toString()));
        }
    };
    return (
        <div>
            <input type="text" placeholder='Address' onChange={(e)=>setreceipt(e.target.value)}/>
            <input type="text" placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={sendSol}>Send SOL</button>
        </div>
    );
}

export default SendSol;
