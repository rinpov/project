'use client';

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Project',
    links: [
      { label: 'Recent Project', link: '#' },
      { label: 'AsurRaa Products', link: '#' },
    ],
  },
  {
    title: 'Other Links',
    links: [
      { label: 'Home', link: '#' },
      { label: 'Services', link: '#' },
      { label: 'About us', link: '#' },
      { label: 'Neo Prime Consulting', link: '#' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: '+855 96 541 6898', link: '#' },
      { label: '+855 15 260 505', link: '#' },
      { label: 'hi@asuraa.com', link: '#' },
      { label: 'Phnom Penh, Cambodia', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <div className={classes.title}>{group.title}</div>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="xxl" className={classes.inner}>
        <div className={classes.logo}>
          <img
            src="https://asurraa.com/wp-content/uploads/2023/07/asurraa-red.png"
            style={{
              height: '60px',
            }}
            alt=""
          />
          <div className={classes.description}>
          AsurRaa technology is a proud member of Neo Prime Consulting Co., Ltd
          </div>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="xxl" className={classes.afterFooter}>
        <div>
        Copyright  © 2023 Neo Prime Consulting All rights reserved.
        </div>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
