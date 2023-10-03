/* eslint-disable @next/next/no-img-element */

'use client';

import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Container,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './Header.module.css';

  const mockdata = [
    {
      title: 'Technology Consulting',
    },
    {
      title: 'Software Development',
    },
  ];
  export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <Text size="lg">
            {item.title}
          </Text>
        </Group>
      </UnstyledButton>
    ));
    return (
      <Box pb={120}>
        <header className={classes.header}>
        <Container size="xxl" className={classes.container}>
          <Group justify="space-between" h="100%" fz="lg">
            <img
              src="https://asurraa.com/wp-content/uploads/2023/07/asurraa-red.png"
              style={{
                  height: '60px',
                }}
              alt=""
            />
            <Group h="100%" gap={30} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Home
              </a>
              <HoverCard width={300} position="bottom" radius="sm" shadow="sm">
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.gray[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <SimpleGrid cols={1} spacing={0}>
                    {links}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Projects
              </a>
              <a href="#" className={classes.link}>
                Products
              </a>
              <a href="#" className={classes.link}>
                About us
              </a>
              <a href="#" className={classes.link}>
                Blog
              </a>
            </Group>
            <Group visibleFrom="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" /></svg>
              <Button size="md" onClick={() => console.log('Hello')} variant="filled" color="rgba(208, 95, 95, 1)">
                Contact us
              </Button>
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Container>
        </header>
        <Drawer.Root
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
        >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
            <img
              src="https://asurraa.com/wp-content/uploads/2023/07/asurraa-red.png"
              style={{
                height: '50px',
              }}
              alt=""
            />
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <ScrollArea>
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Services
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.gray[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Projects
            </a>
            <a href="#" className={classes.link}>
              Products
            </a>
            <a href="#" className={classes.link}>
              About us
            </a>
            <a href="#" className={classes.link}>
              Blog
            </a>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Button size="md" onClick={() => console.log('Hello')} variant="filled" color="rgba(208, 95, 95, 1)">
                Contact us
              </Button>
            </Group>
            </ScrollArea>
          </Drawer.Body>
        </Drawer.Content>
        </Drawer.Root>
      </Box>
    );
  }
