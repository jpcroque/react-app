interface Props {
  children: React.ReactNode;
}
function Card(props: Props) {
  const { children } = props;
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
interface CardBodyProps {
  title: string;
  text?: string;
  imageSrc?: string;
}
function CardBody(props: CardBodyProps) {
  const { title, text, imageSrc } = props;
  return (
    <>
      {imageSrc && (
        <img src={imageSrc} className="card-img-top" alt="Card image" />
      )}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
export default Card;
export { CardBody };
