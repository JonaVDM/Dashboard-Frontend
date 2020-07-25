import React from 'react';
import { Color } from '../components';

interface Props {
  children: any,
  onClick?: () => void;
  disabled?: boolean,
  color?: Color,
  className?: string
}

export function Btn({ children, onClick, disabled, color = Color.Default, className }: Props): JSX.Element {
  function action() {
    if (!disabled && onClick) onClick();
  }

  function classNames() {
    let name = `btn bg-${color}`;
    if (disabled) name = name.concat(` btn--disabled`);
    if (className) name = name.concat(` ${className}`);
    return name
  }

  return (
    <button className={classNames()} onClick={action}>{children}</button>
  );
}
