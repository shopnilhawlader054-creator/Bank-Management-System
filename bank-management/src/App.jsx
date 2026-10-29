import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx'; 
import DepositPage from './pages/Deposit.jsx'; 
import WithdrawPage from './pages/Withdraw.jsx'; 
import TransactionsPage from './pages/Transactions.jsx'; 
// import { BrowserRouter } from 'react-router-dom';
import {useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [deposit,setDeposit] = useState(0);
  const [withdraws,setWithdraws] = useState(0);
  const[total,setTotal] = useState(0);
  const [history,setHistory] = useState([])


  function Withdraw(withdrawamount){
    const TransectionHestory = {
      amount:withdrawamount,
      type:'withdraw',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }

    setWithdraws(withdraws+withdrawamount)
    setTotal(total-withdrawamount)
    setHistory([...history,TransectionHestory])
}
function Deposit(deposetamount){
   const TransectionHestory = {
      amount:deposetamount,
      type:'deposit',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }

    setTotal(total+deposetamount)
    setDeposit(deposit+deposetamount)
    setHistory([...history,TransectionHestory])

}
  return (
    <>
      {/* Navbar সব পেজে দেখানোর জন্য বাইরে রাখা হলো */}
      <Navbar />

  
      <Routes>
        <Route path="/" element={<Dashboard depositv = {deposit} withdrawv = {withdraws} totalv={total}/>} />
        <Route path='/deposit' element={<DepositPage depositfunction = {Deposit}/>}/>
        <Route path='/withdraw' element={<WithdrawPage withdrawfunciton = {Withdraw}  totalv={total}/>}/>
        <Route path='/transactions' element={<TransactionsPage history= {history}/>}/>
      </Routes>
    </>
  );
}

export default App;