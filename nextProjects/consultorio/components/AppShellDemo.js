import { useState } from 'react';
import Link from 'next/link'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
} from '@mantine/core';
import Image from 'next/image';

export default function AppShellDemo({children}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Menu</Text>
          <ul>
            <li><Link href='/consultar'>Consultar</Link></li>
            <li><Link href='/buscadorDeAlimentos'>Buscador de Alimentos</Link></li>
            <li><Link href='/calculos'>IMC</Link></li>
            <li><Link href='/energyTest'>Test</Link></li>
            <li><Link href='/cuadroDietosintetico'>Dietosintetico</Link></li>
            {/* <li><Link href='/energy'>Energy</Link></li> */}
          </ul>
        </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={60} p="md">
          {/* <Link href='/consultar'>Consultar</Link> */}

          <Group position='right' mt='md'>
            <Link href='/consultar'>Consultar</Link>
            <Link href='/buscadorDeAlimentos'>Buscar Alimentos</Link>
            <Link href='/calculos'>IMC</Link>
            <Link href='/energyTest'>Test</Link>
            {/* <Link href='/energy'>Energy</Link> */}
            <Link href='/cuadroDietosintetico'>Dietosintetico</Link>
          </Group>
          Aqui es el footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Link href={'/'}>
                    <a>
                    <Image width={50} height={50} src='/img/juanpunch.jpg'/>
                    </a>
            </Link>
             
            <Text size='md'>Consultorio</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}