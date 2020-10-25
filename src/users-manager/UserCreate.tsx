import {
  Btn,
  Color,
  DropDown,
  DropDownOption,
  TextField,
} from '../components/components';
import * as Api from '../api';
import React, { useState, useContext, useEffect } from 'react';
import UsersContext from './UsersContext';
import userContext from '../userContext';

interface Props { 
  onClose: () => void,
}

export default function UserEdit({onClose}: Props) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role, setRole] = useState('normal');

  let { roles, setAlert, addUser } = useContext(UsersContext);
  let { token } = useContext(userContext);
  let [options, setOptions] = useState<DropDownOption[]>([]);

  useEffect(() => {
    let optionList = [];
    for (let role of roles) {
      optionList.push({ label: role.name, value: role.name });
    }
    setOptions(optionList);
  }, [roles]);

  async function doAction() {
    setAlert({ message: '' });
    try {
      let data = await Api.users.add(token, name, password, email, role);
      setAlert({ color: Color.Success, message: `Added User ${data.name}`, icon: 'add' });
      setRole('');
      setName('');
      setEmail('');
      setPassword('normal');
      addUser(data);
      onClose();
    } catch (e) {
      setAlert({ message: e.message, color: Color.Danger, icon: 'warning' });
    }
  }

  return (
    <div>
      <TextField
        value={name}
        label="Name"
        onChange={(ev) => setName(ev.target.value)}
      />

      <TextField
        value={email}
        label="Email"
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <TextField
        value={password}
        label="Password"
        type="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <DropDown
        label="Role"
        options={options}
        selected={role}
        onChange={(ev) => { setRole(ev.target.value) }}
      />

      <Btn color={Color.Success} onClick={doAction}>Craete</Btn>
    </div>
  );
}

