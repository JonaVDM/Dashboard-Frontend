import React, { CSSProperties } from 'react';
import { Btn } from '../btn/Btn';
import { Color } from '../defaults/Color';

interface Props {
  columns: string[],
  selector: string,
  data: any[],
  canEdit?: boolean,
  canDelete?: boolean,
}

function getRepeat(amount: number) {
  let base = 'auto';
  let strarr = [];
  for (let i = 0; i < amount; i++) {
    strarr.push(base);
  }
  return strarr.join(' ');
}

export function TableList({ columns, selector, data, canEdit, canDelete }: Props): JSX.Element {
  let items: JSX.Element[] = [];
  const className = 'table-list';

  let styles: CSSProperties = {
    // For some reason react didn't compile the css function "repeat()". So
    // This is the best solution build in 2 minutes or so.
    gridTemplateColumns: getRepeat(columns.length + (canEdit || canDelete ? 1 : 0)),
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

  // Push in the actions row if needed
  if (canEdit || canDelete) {
    items.push(<div
      className={`${className}__data ${className}__data-header ${className}__data--no-bottom-border`}
      key="action.key"
    >
      actions
    </div>);
  }

  let index = 0;
  for (let item of data) {
    let cname = `${className}__data`;
    if (index + 1 === data.length) {
      cname += ` ${cname}--no-bottom-border`;
    }

    // Loop through the keys so the cells will appear in the right order
    for (let key of columns) {
      // If the type happens to be an object, use the name of that object
      let value: string = item[key];
      if (key.includes('.')) {
        let subKeys = key.split('.');
        value = item[subKeys[0]][subKeys[1]];
      }

      // Push the data onto the row
      items.push(<div className={cname} key={`${key}-${value}-${index}`}>
        <span className={`${className}__data-label`}>{key}: </span>
        {value}
      </div>);
    }

    // Push in the button actions when needed.
    if (canEdit || canDelete) {
      items.push(<div key={`${item._id}-actions`} className={cname}>
        <Btn color={Color.Primary}>Edit</Btn>
        <Btn color={Color.Danger}>Delete</Btn>
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
