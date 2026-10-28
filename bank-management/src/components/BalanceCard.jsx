 function BalanceCard({ title, amount, type }) {
  // টাইপ অনুযায়ী কালার বা স্টাইল সেট করার জন্য ছোট লজিক
  const isBalance = type === 'balance';
  const isDeposit = type === 'deposit';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
      <div>
        <span className="text-slate-500 text-sm font-medium">{title}</span>
        <h3 className={`text-3xl font-bold mt-2 ${
          isBalance ? 'text-slate-900' : isDeposit ? 'text-green-600' : 'text-red-600'
        }`}>
          ৳ {amount.toLocaleString()}
        </h3>
      </div>
    </div>
  );
}

export default BalanceCard ;