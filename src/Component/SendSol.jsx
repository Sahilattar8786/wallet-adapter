import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import React, { useState } from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendSol = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [receipt, setReceipt] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const sendSol = async () => {
        if (!wallet.publicKey || !wallet.signTransaction) {
            toast.error("❌ Please connect your wallet.", { theme: "light", transition: Bounce });
            return;
        }

        let toPubkey;
        try {
            toPubkey = new PublicKey(receipt);
        } catch (err) {
            toast.error("❌ Invalid recipient address.", { theme: "light", transition: Bounce });
            return;
        }

        const lamports = Number(amount) * 1e9;
        if (isNaN(lamports) || lamports <= 0) {
            toast.error("❌ Enter a valid amount.", { theme: "light", transition: Bounce });
            return;
        }

        try {
            setLoading(true);
            const balance = await connection.getBalance(wallet.publicKey);
            if (balance < lamports) {
                toast.error("❌ Insufficient balance.", { theme: "light", transition: Bounce });
                return;
            }

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey,
                    lamports,
                })
            );

            const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = wallet.publicKey;

            const signed = await wallet.signTransaction(transaction);
            const signature = await connection.sendRawTransaction(signed.serialize());

            await connection.confirmTransaction(
                { signature, blockhash, lastValidBlockHeight },
                'confirmed'
            );

            toast.success(`✅ Transaction successful!`, {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });

        } catch (err) {
            toast.error(`❌ Transaction failed: ${err.message}`, {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4">
            <ToastContainer />
            <div className="bg-gray-100 rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center">Send SOL</h2>

                <input
                    type="text"
                    placeholder="Recipient Address"
                    value={receipt}
                    onChange={(e) => setReceipt(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                    type="text"
                    placeholder="Amount in SOL"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                    onClick={sendSol}
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
                >
                    {loading ? 'Sending...' : 'Send SOL'}
                </button>
            </div>
        </div>
    );
};

export default SendSol;