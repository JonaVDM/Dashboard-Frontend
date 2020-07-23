import React, { useState, useEffect } from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes } from '../components/components';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers';
import UserList from './UserList';

interface Props {
  token: string,
}

function UsersManager({token}: Props): JSX.Element {
  let [users, setUsers] = useState<User[]>([]);
  let [message, setMessage] = useState<string>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {loadUsers()}, []);

  async function loadUsers() {
    let request = await fetch('/api/user', {
      headers: {
        'x-token': token,
      }
    });

    let data = await request.json();
    if (data.users) {
      setUsers(data.users);
    } else {
      setMessage(data.message);
    }
  }

  return (
    <Dashboard>
      <div className="grid">
        {message}

        <Card size={Sizes.full}>
          <p className="h1">User Manger</p>
        </Card>

        <Card>
          <UserList users={users} />
        </Card>
      </div>
    </Dashboard>
  );
}

function mapState(state: RootState) {
  return {
    token: state.auth.token
  }
};

function mapDispatch(dispatch: any) {
  return {}
}

export default connect(mapState, mapDispatch)(UsersManager);
