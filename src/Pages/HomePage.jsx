import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Bet on Crypto, Win Big.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A decentralized betting platform powered by Solana. Fair. Fast. Transparent.
          </p>
          <div className="flex justify-center">
            <WalletMultiButton className="!bg-indigo-600 !text-white hover:!bg-indigo-500 transition" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Decentralized</h3>
            <p className="text-gray-600">
              No middlemen, no delays. All bets are placed and resolved via smart contracts.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Lightning Fast</h3>
            <p className="text-gray-600">
              Built on Solana for ultra-low fees and sub-second transactions.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Secure & Transparent</h3>
            <p className="text-gray-600">
              All bets and outcomes are verifiable on-chain for maximum trust.
            </p>
          </div>
        </div>
      </section>

      {/* Wallets Section */}
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Supported Wallets</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md w-52">
            <img
              src="https://backpack.app/images/backpack-logo-light.svg"
              alt="Backpack Wallet"
              className="h-10 mx-auto mb-3"
            />
            <p className="text-sm text-gray-700">Backpack Wallet</p>
          </div>
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md w-52">
            <img
              src="https://cryptologos.cc/logos/phantom-phantom-logo.svg?v=026"
              alt="Phantom Wallet"
              className="h-10 mx-auto mb-3"
            />
            <p className="text-sm text-gray-700">Phantom Wallet</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;