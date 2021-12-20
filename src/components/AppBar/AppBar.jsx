import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Box,
  Header,
  Menu,
  ResponsiveContext,
  Image,
  Nav,
} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { LINKS } from '../../constants';
import './header.scss';

const AppBar = () => {
  const loginStatus = false;

  const createItems = () =>
    loginStatus
      ? [
          {
            label: <Box pad="small">Logout</Box>,
            href: '/#',
          },
        ]
      : [
          {
            label: (
              <Link to={LINKS.login} pad="medium">
                Login
              </Link>
            ),
          },
          {
            label: (
              <Link to={LINKS.signUp} pad="small">
                Sign Up
              </Link>
            ),
          },
        ];

  return (
    <Header background="dark-1" className="header">
      <Link to="/">
        <Image src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" />
      </Link>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="light-1" />}
                items={createItems()}
              />
            </Box>
          ) : (
            <Nav justify="end" direction="row" gap="medium">
              {loginStatus ? (
                <Anchor href="/#" label="Logout" color="light-1" />
              ) : (
                <>
                  <Link to={LINKS.login} label="Sign Up" color="light-1">
                    Login
                  </Link>
                  <Link to={LINKS.signUp} label="Sign Up" color="light-1">
                    SignUp
                  </Link>
                </>
              )}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default AppBar;
