import './App.css'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui' ;
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import Airdrop from './Component/Airdrop';
function App() {

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com/"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div>
             hii  there <b>Hello</b>
          </div>
         <Airdrop/>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
