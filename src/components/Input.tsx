import { useState } from "react";

function TextInput() {
  const [name, setName] = useState("");

  return (
    <div className="border p-4 rounded">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
        className="border p-2 rounded w-full"
      />

      <p className="mt-4">Hola {name}</p>
    </div>
  );
}

export default TextInput;
