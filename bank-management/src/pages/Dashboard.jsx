import BalanceCard from '../components/BalanceCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // ডেমো ডেটা (পরবর্তীতে এগুলো স্টেট বা কন্টেক্সট থেকে আসবে)
  const accountInfo = {
    bankName: "City Bank PLC",
    accountHolder: "Shopnil Hawlader",
    accountNumber: "1029384756",
    balance: 15400,
    totalDeposit: 25000,
    totalWithdraw: 9600,
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ব্যাংকিং ওয়েলকাম ও অ্যাকাউন্ট ইনফো ব্যানার */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="bg-blue-600 text-xs uppercase px-3 py-1 rounded-full font-semibold tracking-wider">
              {accountInfo.bankName}
            </span>
            <h2 className="text-3xl font-bold mt-3">Welcome, {accountInfo.accountHolder}!</h2>
            <p className="text-slate-300 text-sm mt-1">
              Account No: <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-blue-300">{accountInfo.accountNumber}</span>
            </p>
          </div>
          
          {/* দ্রুত অ্যাকশন বাটন */}
          <div className="flex items-center gap-3">
            <Link 
              to="/deposit" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-xl shadow transition-all duration-200 flex items-center gap-2"
            >
              <span>+ Deposit</span>
            </Link>
            <Link 
              to="/withdraw" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-xl shadow transition-all duration-200 flex items-center gap-2"
            >
              <span>- Withdraw</span>
            </Link>
          </div>
        </div>

        {/* ব্যালেন্স সামারি কার্ডগুলো (Task 1 & Task 6) */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Account Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BalanceCard 
              title="Current Balance" 
              amount={accountInfo.balance} 
              type="balance" 
            />
            <BalanceCard 
              title="Total Deposited" 
              amount={accountInfo.totalDeposit} 
              type="deposit" 
            />
            <BalanceCard 
              title="Total Withdrawn" 
              amount={accountInfo.totalWithdraw} 
              type="withdraw" 
            />
          </div>
        </div>

        {/* সাম্প্রতিক নোটিশ বা ইনফো সেকশন */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-slate-800">Need to check transaction history?</h4>
            <p className="text-sm text-slate-500 mt-0.5">View all your previous deposits and withdrawals in one place.</p>
          </div>
          <Link 
            to="/transactions" 
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group"
          >
            View History <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;