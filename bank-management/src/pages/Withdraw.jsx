import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Withdraw({withdrawfunciton,totalv}) {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0 || Number(amount)> Number(totalv)) {
      alert("Please enter a valid amount!");
      return;
    }
  const withdrawamounts = Number(amount)
  withdrawfunciton(withdrawamounts)
    
    // উইথড্র শেষে ড্যাশবোর্ডে রিডাইরেক্ট
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
          <h2 className="text-2xl font-bold">Withdraw Money</h2>
          <p className="text-xs text-slate-300 mt-1">Withdraw funds safely from your balance.</p>
        </div>

        {/* ফর্ম সেকশন */}
        <form onSubmit={handleWithdrawSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Withdrawal Amount (BDT)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400 font-bold">৳</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg font-semibold text-slate-800"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
          >
            Confirm Withdrawal
          </button>
        </form>

      </div>
    </div>
  );
}