import React from 'react';
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
import './header.scss';

const AppBar = () => {
  return (
    <Header background="dark-1" className="header">
      <Anchor href="/#">
        <Image src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" />
      </Anchor>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="light-1" />}
                items={[
                  {
                    label: <Box pad="medium">login</Box>,
                    href: '/#',
                  },
                  {
                    label: <Box pad="small">Sign up</Box>,
                    href: '/#',
                  },
                  {
                    label: <Box pad="small">logout</Box>,
                    href: '/#',
                  },
                ]}
              />
            </Box>
          ) : (
            <Nav justify="end" direction="row" gap="medium">
              <Anchor href="/#" label="Login" color="light-1" />
              <Anchor href="/#" label="Sign up" color="light-1" />
              <Anchor href="/#" label="Logout" color="light-1" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default AppBar;
