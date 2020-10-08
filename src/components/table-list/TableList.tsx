import React, { CSSProperties } from 'react';

interface Props {
  columns: string[],
  selector: string,
  data: any[]
}

function getRepeat(amount: number) {
  let base = 'auto';
  let strarr = [];
  for (let i = 0; i < amount; i++) {
    strarr.push(base);
  }
  return strarr.join(' ');
}

export function TableList({ columns, selector, data }: Props): JSX.Element {
  let items: JSX.Element[] = [];
  const className = 'table-list';

  let styles: CSSProperties = {
    gridTemplateColumns: getRepeat(columns.length),
  };

  for (let key of columns) {
    items.push(
      <div
        className={`${className}__data ${className}__data-header ${className}__data--no-bottom-border`}
        key={key}>
        {key}
      </div>
    );
  }

  let index = 0;

  for (let item of data) {
    // Loop through the keys so the cells will appear in the right order
    for (let key of columns) {
      // If the type happens to be an object, use the name of that object
      let value: string = item[key];
      if (key.includes('.')) {
        let subKeys = key.split('.');
        value = item[subKeys[0]][subKeys[1]];
      }

      let cname = `${className}__data`;
      if (index + 1 === data.length) {
        cname += ` ${cname}--no-bottom-border`;
      }

      // Push the data onto the row
      items.push(<div className={cname} key={`${key}-${value}-${index}`}>
        <span className={`${className}__data-label`}>{key}: </span>
        {value}
      </div>);
    }

    index++;
  }

  return (
    <div className={`${className}`} style={styles}>
      {items}
    </div>
  )
}
