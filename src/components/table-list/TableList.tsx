import React, { useState, useEffect } from 'react';
import { TextField } from '../components';

interface Props {
  columns: string[],
  selector: string,
  data: any[]
}

export function TableList({ columns, selector, data }: Props): JSX.Element {
  let header: JSX.Element[] = [];
  let items: JSX.Element[] = [];

  let [filtered, setFiltered] = useState<any[]>([]);
  let [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (filter === '') return setFiltered(data);
    let fil = [];
    for (const row of data) {
      for (const column of columns) {
        let value = row[column];
        if (column.includes('.')) {
          let subKeys = column.split('.');
          value = row[subKeys[0]][subKeys[1]];
        }
        if (typeof value !== 'object' && value.toString().includes(filter)) {
          fil.push(row);
          break;
        }
      }
    }
    setFiltered(fil);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, data]);

  for (let key of columns) {
    header.push(
      <th className="table-list__header" key={key}>{key}</th>
    );
  }

  for (let item of filtered) {
    // The row that will be added to the table
    let row: JSX.Element[] = [];

    // Loop through the keys so the cells will appear in the right order
    for (let key of columns) {

      // If the type happens to be an object, use the name of that object
      let value: string = item[key];
      if (key.includes('.')) {
        let subKeys = key.split('.');
        value = item[subKeys[0]][subKeys[1]];
      }

      // Push the data onto the row
      row.push(<td className="table-list__data" key={`${key}-${value}`}>{value}</td>);
    }

    items.push(<tr className="table-list__row" key={`${item[selector]}-row`}>{row}</tr>);
  }

  return (
    <div>
      <TextField placeholder="filter" className="pad-bottom" onChange={(ev) => setFilter(ev.target.value)}/>

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
    </div>
  );
}
