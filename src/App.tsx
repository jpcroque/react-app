import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import photo from "./assets/images/6.png";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  /*const list = ["Carnivoro", "Herbívoro", "Omnívoro"];
  const handleSelect = (elemento: string, index: number) => {
    console.log("Elemento seleccionado:", elemento, index);
  };
  return (
    <Card>
      <CardBody
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card’s content."
        imageSrc={photo}
      />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );*/
  const [data, setData] = useState(["Carnivoro", "Herbívoro", "Omnívoro"]);
  const addElement = () => {
    setData([...data, "Nuevo elemento"]);
  };
  const delElement = () => {
    setData(data.slice(0, -1));
  };
  return (
    <Card>
      <Button onClick={addElement}>Agregar</Button>
      <Button onClick={delElement}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}
export default App;
