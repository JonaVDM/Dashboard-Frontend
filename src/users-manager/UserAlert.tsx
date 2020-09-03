import React, { useContext } from 'react';
import { Alert } from '../components/components';
import UsersContext from './UsersContext';

export default function UserAlert() {
  let { alert, setAlert } = useContext(UsersContext);

  if (!alert || alert.message === '') return (<div className="hidden"></div>);

  let { message, color, icon } = alert;

  return (
    <Alert color={color} icon={icon} onClose={() => setAlert({ message: '' })}>{message}</Alert>
  );
}
