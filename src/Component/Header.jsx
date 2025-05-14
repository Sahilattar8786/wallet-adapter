// src/components/Header.js
import React from 'react';
import { WalletConnectButton } from '@solana/wallet-adapter-react-ui';
const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">My DApp</h1>

        {/* Connect Wallet Button */}
         <WalletConnectButton></WalletConnectButton>
      </div>
    </header>
  );
};

export default Header;