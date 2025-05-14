import './App.css'
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui' ;
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import Airdrop from './Component/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useState } from 'react';
import { AddressLookupTableAccount } from '@solana/web3.js';
import SendSol from './Component/SendSol';
import Header from './Component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [showAirDrop,setShowAirDrop]=useState(false)
  const [showSend,setShowSend]=useState(false)
  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/g64SFD6GaOiJT9GE_BlgRQFWfxlluFE7"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <BrowserRouter>
           <Header/>

                      <Routes>
                         <Route path='/' element={<HomePage/>}/>
                         <Route  path='/airdrop' element={<Airdrop/>}/>
                      </Routes>
                    </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  
    </>
  )
}

export default App

