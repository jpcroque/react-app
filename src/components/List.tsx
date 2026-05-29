import { useState } from "react";
type Props = {
  data: string[];
  onSelect?: (elemento: string, index: number) => void;
};
function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento, i + 1);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          className="p-2 cursor-pointer list-group-item border-1 border-gray-300 mb-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          key={elemento}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}
export default List;
