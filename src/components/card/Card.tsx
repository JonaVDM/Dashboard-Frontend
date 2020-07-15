import React from 'react';

export enum Sizes {
  full = 'full',
  three_quarters = 'three-quarters',
  two_thirds = 'two-thirds',
  half = 'half',
  third = 'third',
  quarter = 'quarter',
}

interface Props {
  size?: Sizes,
  children?: any,
}

export function Card({size, children}: Props) {
  function className(): string {
    let name = `card`;
    if (size) name = name.concat(` ${name}--${size}`);
    else name = name.concat(` ${name}--full`);
    return name;
  }

  return (
    <div className={className()}>
      {children}
    </div>
  );
}
