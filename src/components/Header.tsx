interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  title: string;
  logo?: string;
  menuItems?: MenuItem[];
}

function Header({ title, logo, menuItems = [] }: HeaderProps) {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {logo ? (
          <img src={logo} alt={title} className="h-10 w-auto invert" />
        ) : (
          <h1 className="text-2xl font-bold">{title}</h1>
        )}

        <nav>
          <ul className="flex gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
