import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  // নেভিগেশন লিংকগুলোর সাধারণ ও অ্যাক্টিভ স্টাইল
  const navLinkStyles = ({ isActive }) =>
    `font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      isActive
        ? 'bg-blue-600 text-white font-semibold'
        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ব্র্যান্ড লোগো ও ব্যাংক টাইটেল */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xl shadow-inner group-hover:bg-blue-500 transition-colors">
            $
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white m-0 leading-tight">
              City Bank
            </h1>
            <p className="text-xs text-blue-400 m-0">Management System</p>
          </div>
        </Link>

        {/* নেভিগেশন মেনু */}
        <nav className="flex items-center gap-2 md:gap-4">
          <NavLink to="/" className={navLinkStyles}>
            Dashboard
          </NavLink>
          <NavLink to="/deposit" className={navLinkStyles}>
            Deposit
          </NavLink>
          <NavLink to="/withdraw" className={navLinkStyles}>
            Withdraw
          </NavLink>
          <NavLink to="/transactions" className={navLinkStyles}>
            Transaction History
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;