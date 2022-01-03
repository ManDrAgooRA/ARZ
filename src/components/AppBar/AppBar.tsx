import React, { FC } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { changeSinUpStatus } from '../../store/actions';
import { LINKS } from '../../constants';
import { authIsLogin, authPersonName } from '../../store/selectors';
import './header.scss';

export const AppBar: FC = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(authIsLogin);
  const userName = useSelector(authPersonName);
  const logOut = () => {
    localStorage.clear();
    dispatch(changeSinUpStatus(false));
  };

  const createItems = () =>
    loginStatus
      ? [
          {
            label: <Box pad="small">{userName}</Box>,
          },
          {
            label: (
              <Box pad="small" onClick={logOut}>
                Logout
              </Box>
            ),
          },
        ]
      : [
          {
            label: <Link to={LINKS.login}>Login</Link>,
          },
          {
            label: <Link to={LINKS.signUp}>Sign Up</Link>,
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
                <>
                  <Anchor label={userName} color="light-1" />
                  <Anchor label="Logout" color="light-1" onClick={logOut} />
                </>
              ) : (
                <>
                  <Link to={LINKS.login} color="light-1">
                    Login
                  </Link>
                  <Link to={LINKS.signUp} color="light-1">
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
