import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon package (you can also use Heroicons or any SVG)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">My DApp</Link>
        </h1>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links + Wallet */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/airdrop" className="hover:underline">Airdrop</Link>
          <Link to="/send" className="hover:underline">Send</Link>
          <WalletMultiButton className="!bg-indigo-600 !text-white hover:!bg-indigo-500 transition" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to="/airdrop" className="block hover:underline" onClick={() => setMenuOpen(false)}>Airdrop</Link>
          <Link to="/send" className="block hover:underline" onClick={() => setMenuOpen(false)}>Send</Link>
          <WalletMultiButton className="!bg-indigo-600 !text-white hover:!bg-indigo-500 transition w-full" />
        </div>
      )}
    </header>
  );
};

export default Header;