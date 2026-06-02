import { useState } from "react";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const productos = [
    { id: 1, nombre: "Manzana", categoria: "frutas" },
    { id: 2, nombre: "Banana", categoria: "frutas" },
    { id: 3, nombre: "Naranja", categoria: "frutas" },
    { id: 4, nombre: "Uva", categoria: "frutas" },
    { id: 5, nombre: "Lechuga", categoria: "verduras" },
    { id: 6, nombre: "Zanahoria", categoria: "verduras" },
    { id: 7, nombre: "Tomate", categoria: "verduras" },
    { id: 8, nombre: "Pepino", categoria: "verduras" },
    { id: 9, nombre: "Pan", categoria: "panaderia" },
    { id: 10, nombre: "Croissant", categoria: "panaderia" },
    { id: 11, nombre: "Baguette", categoria: "panaderia" },
    { id: 12, nombre: "Muffin", categoria: "panaderia" },
    { id: 13, nombre: "Leche", categoria: "lacteos" },
    { id: 14, nombre: "Queso", categoria: "lacteos" },
    { id: 15, nombre: "Yogur", categoria: "lacteos" },
    { id: 16, nombre: "Mantequilla", categoria: "lacteos" },
    { id: 17, nombre: "Carne", categoria: "carnes" },
    { id: 18, nombre: "Pollo", categoria: "carnes" },
    { id: 19, nombre: "Pescado", categoria: "carnes" },
    { id: 20, nombre: "Cerdo", categoria: "carnes" },
  ];
  const productosFiltrados = productos.filter((producto) =>
    categoriaSeleccionada === "todos"
      ? true
      : producto.categoria === categoriaSeleccionada,
  );
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "todos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("todos")}
        >
          Todos
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "frutas"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("frutas")}
        >
          Frutas
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "verduras"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("verduras")}
        >
          Verduras
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "panaderia"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("panaderia")}
        >
          Panadería
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "lacteos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("lacteos")}
        >
          Lácteos
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            categoriaSeleccionada === "carnes"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCategoriaSeleccionada("carnes")}
        >
          Carnes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="border p-4">
            <h2 className="text-xl font-bold">{producto.nombre}</h2>
            <p className="text-gray-600">Categoría: {producto.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
