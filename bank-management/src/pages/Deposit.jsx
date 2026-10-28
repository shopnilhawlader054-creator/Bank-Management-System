// import React, { useState } from 'react';
import {Link } from 'react-router-dom';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    // অটোমেটিক তারিখ ও সময়সহ অবজেক্ট তৈরি
    const newTransaction = {
      id: Date.now(),
      type: 'Deposit',
      amount: Number(amount),
      description: description || 'Account Deposit',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    console.log("New Deposit Action:", newTransaction);
    alert(`Successfully deposited ৳ ${Number(amount).toLocaleString()}!`);
    
    // ডিপোজিট শেষে ড্যাশবোর্ডে রিডাইরেক্ট
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 p-6 md:p-10 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        
        {/* হেডার ব্যানার */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6">
          <Link to="/" className="text-xs text-blue-300 hover:underline flex items-center gap-1 mb-2">
            ← Back to Dashboard
          </Link>
          <h2 className="text-2xl font-bold">Deposit Money</h2>
          <p className="text-xs text-slate-300 mt-1">Add funds securely to your bank account.</p>
        </div>

        {/* ফর্ম সেকশন */}
        <form onSubmit={handleDepositSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Deposit Amount (BDT)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-bold">৳</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-semibold text-slate-800"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Note / Reference (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., Monthly Salary, Bonus"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
          >
            Confirm Deposit
          </button>
        </form>

      </div>
    </div>
  );
}