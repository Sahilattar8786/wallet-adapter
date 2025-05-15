import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';
import { toast, ToastContainer,Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Airdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function sendAirDropTOUser() {
        if (!wallet.publicKey) {
            setMessage('Please connect your wallet.');
            return;
        }

        if (!amount || isNaN(amount)) {
            toast.error('Enter Amount',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            return;
        }

        try {
            setLoading(true);
            const signature = await connection.requestAirdrop(wallet.publicKey, Number(amount) * 1e9);
            
            toast.success(`✅ Airdrop successful! Tx: ${signature}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            alert('toast shown')
            
        } catch (error) {
            setMessage(`❌ Airdrop failed ${error.message}`);
            toast.error(`❌ Airdrop failed ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Solana Airdrop Portal</h1>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">
                <input
                    type="text"
                    placeholder="Enter amount in SOL"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={sendAirDropTOUser}
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
                >
                    {loading ? 'Sending...' : 'Send Airdrop'}
                </button>

                {message && (
                    <div className="text-sm mt-2 text-center">
                        {message}
                    </div>
                )}
            </div>

            {!wallet.connected && (
                <p className="mt-6 text-sm text-red-400">Please connect your wallet to use the airdrop feature.</p>
            )}
            <ToastContainer/>
        </div>

    );
};

export default Airdrop;