import React, { useState, useEffect } from 'react';
import { TextField } from '../components';

interface Props {
  data: any[],
  columns: string[],
  onFilter: (data: any[]) => void,
}

export function Filter({ data, onFilter, columns }: Props) {
  let [filter, setFilter] = useState('');

  useEffect(applyFilter, [filter, data]);

  function applyFilter() {
    // Reset the filter
    if (filter === '') return onFilter(data);

    let filtered = []
    for (const row of data) {
      for (const column of columns) {
        let value = row[column];

        // Check the subcolumn, not deep yet
        if (column.includes('.')) {
          let subKeys = column.split('.');
          value = row[subKeys[0]][subKeys[1]];
        }

        // If the value is an object it will be skipped
        if (typeof value === 'object') continue;

        // Filter the value in it's string form
        if (value.toString().includes(filter)) {
          filtered.push(row);
          break;
        }
      }
    }

    return onFilter(filtered);
  }

  return (
    <TextField
      placeholder="filter"
      value={filter}
      onChange={(ev) => setFilter(ev.target.value)}
    />
  );
}
