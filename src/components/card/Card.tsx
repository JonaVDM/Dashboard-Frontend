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
  noBackground?: boolean,
}

export function Card({ size, children, noBackground }: Props) {
  function className(): string {
    let cname = 'card'
    let name = cname;
    if (noBackground) name = name.concat(` ${cname}--no-background`);
    if (size) name = name.concat(` ${cname}--${size}`);
    else name = name.concat(` ${cname}--full`);
    return name;
  }

  return (
    <div className={className()}>
      {children}
    </div>
  );
}
