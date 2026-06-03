import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Contador</h2>

      <p className="mb-4">Valor: {count}</p>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded my-2"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded my-2 ml-2"
        onClick={() => setCount(count <= 0 ? 0 : count - 1)}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Counter;
