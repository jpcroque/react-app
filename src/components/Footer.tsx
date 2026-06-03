interface FooterMenuItem {
  label: string;
  href: string;
}

interface FooterProps {
  title: string;
  logo?: string;
  menuItems: FooterMenuItem[];
  description?: string;
  copyright?: string;
}
function Footer({
  title,
  logo,
  menuItems,
  description,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      {/* Footer principal */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo o Título */}
          <div>
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="h-12 w-auto invert w-25 h-25"
              />
            ) : (
              <h2 className="text-xl font-bold">{title}</h2>
            )}
          </div>

          {/* Menú */}
          <div>
            <h3 className="font-semibold mb-3">Enlaces</h3>

            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Texto libre */}
          <div>
            <h3 className="font-semibold mb-3">Información</h3>

            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-slate-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
