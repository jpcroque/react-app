import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClick?: () => void;
};
function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
