import React from 'react';

interface Props {
  text: string,
  onClick: () => void;
  disabled: boolean,
  color: string,
}

export function Btn({text, onClick, disabled}: Props): JSX.Element {
  function className() {
    let name = "btn";
    if (disabled) return name.concat(` ${name}--disabled`);
    return name;
  }

  return (
    <button className={className()} onClick={onClick}>{text}</button>
  );
}
