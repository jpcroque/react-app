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
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
}
function CardBody(props: CardBodyProps) {
  const { title, text, buttonText, buttonLink, imageSrc } = props;
  return (
    <>
      {imageSrc && (
        <img src={imageSrc} className="card-img-top" alt="Card image" />
      )}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a
        href={buttonLink}
        className="btn btn-primary"
        style={{ width: "auto", height: "40px" }}
      >
        {buttonText}
      </a>
    </>
  );
}
export default Card;
export { CardBody };
