import { Card, Sizes } from '../components/components';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers';
import Dashboard from '../dashboard/Dashbaord';
import NewUser from './NewUser';
import React, { useState, useEffect } from 'react';
import UserList from './UserList';

interface Props {
  token: string,
}

function UsersManager({token}: Props): JSX.Element {
  let [users, setUsers] = useState<User[]>([]);
  let [message, setMessage] = useState<string>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {load()}, []);

  async function load() {
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

        <Card size={Sizes.half}>
          <p className="h2 pad-bottom">New</p>
          <NewUser />
        </Card>

        <Card size={Sizes.half}>
          <p className="h3">Update</p>
        </Card>

        <Card size={Sizes.full}>
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
