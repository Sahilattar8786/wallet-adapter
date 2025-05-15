import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">
          <Link to="/">My DApp</Link>
        </h1>

        {/* Nav Links + Wallet */}
        <div className="flex items-center space-x-6">
          <Link to="/airdrop" className="hover:underline">Airdrop</Link>
          <Link to="/send" className="hover:underline">Send</Link>
          <WalletMultiButton className="!bg-indigo-600 !text-white hover:!bg-indigo-500 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;