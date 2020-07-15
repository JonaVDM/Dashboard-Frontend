import React from 'react';

interface Props {
  text: string,
  onClick: () => void;
  disabled?: boolean,
  color?: Color,
}

export enum Color {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success'
}

export function Btn({text, onClick, disabled, color}: Props): JSX.Element {
  function className() {
    let name = "btn";
    if (disabled) return name.concat(` ${name}--disabled`);
    if (!color) return name;
    if (color === 'primary') return name.concat(` ${name}--primary`);
    if (color === 'danger') return name.concat(` ${name}--danger`);
  }

  return (
    <button className={className()} onClick={onClick}>{text}</button>
  );
}
