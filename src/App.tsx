import Card, { CardBody } from "./components/Card";
import photo from "./assets/images/6.png";

function App() {
  return (
    <Card>
      <CardBody
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card’s content."
        buttonText="Go somewhere"
        buttonLink="https://www.google.com"
        imageSrc={photo}
      />
    </Card>
  );
}
export default App;
