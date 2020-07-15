import React from 'react';

interface Props {
  text: string,
  onClick: () => void;
  disabled?: boolean,
  color?: Color,
  className?: string
}

export enum Color {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success'
}

export function Btn({ text, onClick, disabled, color, className }: Props): JSX.Element {
  function action() {
    if (!disabled) onClick();
  }

  function classNames() {
    let name = `btn ${className}`;
    if (disabled) return name.concat(` ${name}--disabled`);
    if (color) name = name.concat(` ${name}--${color}`);
    return name;
  }

  return (
    <button className={classNames()} onClick={action}>{text}</button>
  );
}
