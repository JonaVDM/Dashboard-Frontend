import { Btn, Color } from '../../components/components';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/reducers';

interface Props {
  expanded: boolean,
  logout: any,
  permissions: string[]
}

interface Item {
  // The label on the sidebar
  name: string,

  // The icon on the sidebar
  // Should be the name of the material icon
  // https://material.io/resources/icons
  icon: string,

  // the url to the page
  link: string,

  // The permission the user will need before entering the page
  requirements?: string[],
}

function Sidebar({ expanded, logout, permissions }: Props): JSX.Element {
  function className(): string {
    if (expanded) return 'sidebar sidebar--expanded';
    return 'sidebar';
  }

  function signOut(): void {
    logout();
  }

  function items(): JSX.Element[] {
    let items: JSX.Element[] = [];
    for (let link of links) {
      if (!permissions.includes('admin') && link.requirements) {
        let allowed = false;
        for (let requirement of link.requirements) {
          const category = requirement.split('.')[0];
          if (permissions.includes(requirement) ||
            permissions.includes(category)) {
            allowed = true;
          }
        }

        if (!allowed) continue;
      }

      items.push(
        <div className="sidebar__link-container" key={link.link}>
          <i className="material-icons sidebar__icon">{link.icon}</i>
          <Link className="sidebar__link" to={link.link}>{link.name}</Link>
        </div>
      )
    }
    return items;
  }

  let links: Item[] = [
    {
      name: 'Home',
      link: '/',
      icon: 'dashboard',
    },
    {
      name: 'Users',
      link: '/users',
      icon: 'group',
      requirements: ['user.read']
    },
    {
      name: 'UI Test',
      link: '/grid',
      icon: 'build',
      requirements: ['admin']
    },
  ];

  return (
    <div className={className()}>
      {items()}
      <div className="sidebar__logout mar-top">
        <Btn color={Color.Danger} onClick={signOut}>Logout</Btn>
      </div>
    </div>
  );
}

function mapState(state: RootState) {
  return {
    permissions: state.auth.role.permissions,
  }
}

function mapDispatch(dispatch: any) {
  return {
    logout: async () =>
      await dispatch(logout()),
  }
}

export default connect(mapState, mapDispatch)(Sidebar);
