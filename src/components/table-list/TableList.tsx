import React from 'react';

interface Props {
  columns: string[],
  selector: string,
  data: any[]
}

export function TableList({ columns, selector, data }: Props): JSX.Element {
  let header: JSX.Element[] = [];
  let items: JSX.Element[] = [];

  for (let key of columns) {
    header.push(
      <th className="table-list__header" key={key}>{key}</th>
    );
  }

  for (let item of data) {
    // The row that will be added to the table
    let row: JSX.Element[] = [];

    // Loop through the keys so the cells will appear in the right order
    for (let key of columns) {

      // If the type happens to be an object, use the name of that object
      let text: string = item[key];
      if (typeof item[key] == 'object') {
        text = item[key]['name'];
      }

      // Push the data onto the row
      row.push(<td className="table-list__data" key={`${key}-${text}`}>{text}</td>);
    }

    items.push(<tr className="table-list__row" key={`${item[selector]}-row`} onClick={(e) => {console.log(e)}}>{row}</tr>);
  }

  return (
    <table className="table-list">
      <thead>
        <tr className="table-list__row">
          {header}
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}
