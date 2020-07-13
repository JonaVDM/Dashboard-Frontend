import React from 'react';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  label: string
}

export function TextField({label, type, onChange}: Props) {
  return (
    <div>
      <label htmlFor={"input-" + label}>{label}</label>
      <input className="text-field" type={type} onChange={onChange} id={"input-" + label} />
    </div>
  );
}
