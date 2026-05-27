import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import photo from "./assets/images/6.png";

function App() {
  const list = ["Carnivoro", "Herbívoro", "Omnívoro"];
  const handleSelect = (elemento: string, index: number) => {
    console.log("Elemento seleccionado:", elemento, index);
  };
  return (
    <Card>
      <CardBody
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card’s content."
        buttonText="Go somewhere"
        buttonLink="https://www.google.com"
        imageSrc={photo}
      />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}
export default App;
