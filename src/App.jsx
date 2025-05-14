import './App.css'
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui' ;
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import Airdrop from './Component/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useState } from 'react';
import { AddressLookupTableAccount } from '@solana/web3.js';
import SendSol from './Component/SendSol';
function App() {
  const [showAirDrop,setShowAirDrop]=useState(false)
  const [showSend,setShowSend]=useState(false)
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/g64SFD6GaOiJT9GE_BlgRQFWfxlluFE7"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <button onClick={() => setShowAirDrop(!showAirDrop)}>AirDrop</button><button onClick={() => setShowSend(!showSend)}>Send</button>
           {
             showAirDrop ?  <Airdrop/> :null
           }
           {
             showSend ? <SendSol/> : null
           }
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
