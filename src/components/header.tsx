const Header = () => {
  return (
    <header className="w-full bg-slate-800 p-2">
      <nav className="max-w-7xl mx-auto flex justify-end">
        <a
          href="symbol-profit"
          className="text-gray-300 mx-4 px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 transition-colors duration-200"
        >
          Symbol Profit
        </a>
        <a
          href="savings-compund-interest"
          className="text-gray-300 mx-4 px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 transition-colors duration-200"
        >
          Savings Compound Interest 
        </a>
      </nav>
    </header>
  )
}

export default Header