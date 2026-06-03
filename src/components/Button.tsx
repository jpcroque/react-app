interface ButtonProps {
  text: string;
  onClick: () => void;
  href?: string;
}

function Button({ text, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {text}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
}

export default Button;
