import React from 'react';

interface Props {
  children: any,
  onClick?: () => void;
  disabled?: boolean,
  color?: Color,
  className?: string
}

export enum Color {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success'
}

export function Btn({ children, onClick, disabled, color, className }: Props): JSX.Element {
  function action() {
    if (!disabled && onClick) onClick();
  }

  function classNames() {
    let name = `btn`;
    if (disabled) name = name.concat(` ${name}--disabled`);
    else if (color) name = name.concat(` ${name}--${color}`);
    if (className) name = name.concat(` ${className}`);
    return name
  }

  return (
    <button className={classNames()} onClick={action}>{children}</button>
  );
}
