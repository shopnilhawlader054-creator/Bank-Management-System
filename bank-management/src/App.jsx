import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx'; 
import Deposit from './pages/Deposit.jsx'; 
import Withdraw from './pages/Withdraw.jsx'; 
// import { BrowserRouter } from 'react-router-dom';
import {useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [deposit,setDeposit] = useState(0);
  const [withdraws,setWithdraws] = useState(0);
  const[total,setTotal] = useState(0);
  const [history,setHistory] = useState([])


  function Withdraw(withdrawes){
    const TransectionHestory = {
      amount:withdrawes,
      type:'withdraw',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }

    setWithdraws(withdraws+withdrawes)
    setTotal(total-withdrawes)
    setWithdraws({...withdraws,TransectionHestory})
}
function Deposit(deposet){
   const TransectionHestory = {
      amount:deposet,
      type:'deposit',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }

    setTotal(total+deposet)
    setDeposit(deposit+deposet)
    setHistory({...history,TransectionHestory})

}
  return (
    <>
      {/* Navbar সব পেজে দেখানোর জন্য বাইরে রাখা হলো */}
      <Navbar />

  
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
      </Routes>
    </>
  );
}

export default App;