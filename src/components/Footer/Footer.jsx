import React from 'react';
import { FacebookOption, Instagram, Twitter, Youtube } from 'grommet-icons';
import { Anchor, Box, Footer, Text, Image } from 'grommet';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Follow us on Instagramm"
      target="_blank"
      href="https://www.instagram.com/rozetkaua/"
      icon={<Instagram color="light-1" />}
    />

    <Anchor
      a11yTitle="Chat with us on Facebook"
      target="_blank"
      href="https://www.facebook.com/rozetka.ua"
      icon={<FacebookOption color="light-1" />}
    />

    <Anchor
      a11yTitle="Follow us on Twitter"
      target="_blank"
      href="https://twitter.com/rozetka_ua"
      icon={<Twitter color="light-1" />}
    />

    <Anchor
      a11yTitle="Follow us on Twitter"
      target="_blank"
      href="https://www.youtube.com/channel/UCr7r1-z79TYfqS2IPeRR47A"
      icon={<Youtube color="light-1" />}
    />
  </Box>
);

const MyFooter = () => {
  return (
    <Footer background="dark-1" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <Anchor href="/#">
          <Image src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" />
        </Anchor>
      </Box>

      <Media />

      <Text textAlign="center" size="xsmall">
        ©Copyright
      </Text>
    </Footer>
  );
};

export default MyFooter;
