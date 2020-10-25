import React from 'react';
import { TableRow } from './TableRow';

interface Props {
  columns: string[],
  selector: string,
  data: any[],
  canEdit?: boolean,
  canDelete?: boolean,
  onDelete?: (id: string) => void
}

export function TableList({ columns, selector, data, canEdit, canDelete, onDelete }: Props): JSX.Element {
  // Make the header list with all the fields
  let header: JSX.Element[] = [];
  for (let key of columns) {
    header.push(
      <th
        className="table-list__header"
        key={key}>
        {key}
      </th>
    );
  }

  // Generate the rows to display
  let rows: JSX.Element[] = [];
  for (let row of data) {
    rows.push(
      <TableRow
        headers={columns}
        data={row}
        key={row._id}
        canEdit={canEdit}
        canDelete={canDelete}
        onDelete={onDelete}
      />
    );
  }

  return (
    <table className="table-list">
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
