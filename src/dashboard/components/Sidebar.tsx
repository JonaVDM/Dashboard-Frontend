import { Btn, Color } from '../../components/components';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  expanded: boolean,
  logout: any
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
  permissions?: string[],
}

function Sidebar({ expanded, logout }: Props): JSX.Element {
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
      items.push(
        <div className="sidebar__link-container">
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
      permissions: ['user.read']
    },
  ];

  return (
    <div className={className()}>
      {items()}
      <div className="sidebar__logout mar-top">
        <Btn text="Logout" color={Color.Danger} onClick={signOut} />
      </div>
    </div>
  );
}

function mapDispatch(dispatch: any) {
  return {
    logout: async () =>
      await dispatch(logout()),
  }
}

export default connect(null, mapDispatch)(Sidebar);
