import React from 'react';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string,
  label: string,
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  className?: string,
}

export function TextField({ label, type, onChange, onKeyPress, className }: Props) {
  return (
    <div className={className}>
      <label className="text-fied__buttom" htmlFor={"input-" + label}>{label}</label>
      <input
        className="text-field"
        type={type || 'text'}
        onChange={onChange}
        onKeyPress={onKeyPress}
        name={label.toLowerCase()}
        id={"input-" + label} />
    </div>
  );
}
