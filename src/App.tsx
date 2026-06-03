import MainLayout from "./layouts/MainLayout";
import Card from "./components/Card";
import Button from "./components/Button";
import Couner from "./components/Counter";

function App() {
  return (
    <MainLayout>
      <Card title="Producto">
        <p>Descripción del producto.</p>
        <Button
          text="Guardar"
          onClick={() => alert("Guardado")}
          href="/guardar"
        />
        <Couner />
        <input
          type="text"
          placeholder="Escribe tu nombre"
          className="border p-2 rounded w-full"
        />
      </Card>
    </MainLayout>
  );
}

export default App;
