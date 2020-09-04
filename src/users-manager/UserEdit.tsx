import React, { useState, useContext, useEffect } from 'react';
import { TextField, DropDown, Btn, Card, Color } from '../components/components';
import UsersContext from './UsersContext';

export default function UserEdit() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role, setRole] = useState('normal');

  let { roles } = useContext(UsersContext);
  let [options, setOptions] = useState<{ label: string, value: string }[]>([]);


  useEffect(() => {
    let optionList = [];
    for (let role of roles) {
      optionList.push({ label: role.name, value: role.name });
    }
    setOptions(optionList);
  }, [roles]);


  return (
    <Card className="flex-space-around">
      <div>
        <TextField value={name} label="Name" onChange={(ev) => setName(ev.target.value)} />
        <TextField value={email} label="Email" onChange={(ev) => setEmail(ev.target.value)} />
        <TextField value={password} label="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} />
        <DropDown label="Role" options={options} selected={role} onChange={(ev) => { setRole(ev.target.value) }} />
      </div>
      <Btn color={Color.Success}>Create</Btn>
    </Card>
  );
}

