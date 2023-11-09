import { ChangeEventHandler } from 'react';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}

export const FilterSelect = ({ value, onChange, options }: Props) => {
  return (
    <div className="flex gap-2 items-center mr-10">
      <label>Filtrar por:</label>
      <select
        className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-gray-300"
        value={value}
        onChange={onChange}
      >
        {options.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
