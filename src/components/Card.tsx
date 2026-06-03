interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="w-full border rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {children}
    </div>
  );
}

export default Card;
