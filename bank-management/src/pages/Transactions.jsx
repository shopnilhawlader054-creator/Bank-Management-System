import React from 'react';

export default function TransactionHistory({ history }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Transaction History</h3>

      {/* যদি হিস্ট্রি খালি থাকে */}
      {history.length === 0 ? (
        <p className="text-slate-500 text-sm py-4 text-center">No transactions made yet.</p>
      ) : (
        <div className="space-y-3">
          {history.map((item) => {
            const isDeposit = item.type === 'deposit';

            return (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/60 transition-colors"
              >
                {/* বাম পাশ: ধরন এবং তারিখ/সময় */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    isDeposit ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {isDeposit ? '↓' : '↑'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 capitalize">
                      {item.type}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.date} at {item.time}
                    </p>
                  </div>
                </div>

                {/* ডান পাশ: টাকার পরিমাণ */}
                <div className={`font-bold text-lg ${
                  isDeposit ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isDeposit ? '+' : '-'} ৳ {item.amount.toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}