import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

interface MainLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];
const footerMenu = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header title="Mi App React" logo={logo} menuItems={menuItems} />

      <main className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-screen">
        {children}
      </main>

      <Footer
        title="Mi Aplicación"
        logo={logo}
        menuItems={footerMenu}
        description="Este es un footer reutilizable creado con React y Tailwind CSS."
        copyright="© 2026 Mi Aplicación. Todos los derechos reservados."
      />
    </>
  );
}

export default MainLayout;
