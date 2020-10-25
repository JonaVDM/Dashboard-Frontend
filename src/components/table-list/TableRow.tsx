import React, { useState } from 'react';
import { Btn, Color } from '../components';

interface Props {
  data: any,
  headers: any[],
  canEdit?: boolean,
  canDelete?: boolean,
  onDelete?: (id: string) => void
}

export function TableRow({ headers, data, canEdit, canDelete, onDelete }: Props) {
  let [confirmDelete, changeDelete] = useState(false);

  // Put data in the rows
  let items: JSX.Element[] = [];
  for (let header of headers) {
    let value: string = data[header];

    // Check if it is a subfield thing
    if (header.includes('.')) {
      let subKeys = header.split('.');
      value = data[subKeys[0]][subKeys[1]];
    }

    // Push onto the list
    items.push(<td className="table-list__data" key={header}>{value}</td>);
  }

  if (confirmDelete) {
    // Add the confirm screen for the delete
    items.push(
      <td key="confirm-delete">
        <span className="table-list__button">
          You sure
        </span>
        <Btn
          color={Color.Success}
          className="table-list__button"
          onClick={deleteConfirmed}
        >Yes</Btn>
        <Btn
          color={Color.Danger}
          className="table-list__button"
          onClick={cancel}
        >No</Btn>
      </td>
    );
  } else if (canEdit || canDelete) {
    // Add in the buttons for edit and delete
    items.push(
      <td key="actions" className="table-list__data">
        <Btn
          color={Color.Primary}
          className="table-list__button"
        >Edit</Btn>
        <Btn
          color={Color.Danger}
          className="table-list__button"
          onClick={toggleDelete}
        >Delete</Btn>
      </td>
    );
  }

  function toggleDelete() {
    changeDelete(true);
  }

  function cancel() {
    changeDelete(false);
  }

  function deleteConfirmed() {
    if (!onDelete) return;
    onDelete(data._id);
  }

  return (
    <tr className="table-list__row">
      {items}
    </tr>
  );
}
