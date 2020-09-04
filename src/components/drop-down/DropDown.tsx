import React from 'react';

interface Props {
  options: { label: string, value: string }[],
  selected: string,
  onChange: (args: React.ChangeEvent<HTMLSelectElement>) => void,
  label?: string,
}

export function DropDown({ options, onChange, selected, label }: Props): JSX.Element {
  let list: JSX.Element[] = [];

  options.forEach(({ label, value }) => list.push(
    <option key={value} className="drop-down__option" value={value}>{label}</option>
  ));

  return (
    <div className="drop-down__container">
      {label &&
        <label className="drop-down__label">{label}</label>
      }

      <select value={selected} onChange={onChange} className="drop-down">
        {list}
      </select>
    </div>
  );
}
