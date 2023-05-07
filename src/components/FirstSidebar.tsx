import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
import MolvisLogo from './MolvisLogo';
import { toggleSidebar } from '../utils/sidebarController';

import { FiCamera, FiFile, FiSettings } from 'react-icons/fi';
import { useState } from 'react';


export default function FirstSidebar() {
  const [buttonHighlight, setButtonHighlight] = useState(true);
  return (
    <Sheet
      className="FirstSidebar"
      variant="soft"
      color="primary"
      invertedColors
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.2s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--FirstSidebar-width)',
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '56px',
          },
        }}
      />
      <MolvisLogo />
      <List sx={{ '--ListItem-radius': '8px', '--List-gap': '12px' }}>
        <ListItem>
          <ListItemButton
            selected={buttonHighlight}
            onClick={() => { toggleSidebar(); buttonHighlight ? setButtonHighlight(false) : setButtonHighlight(true);
               }}
          >
            <FiFile />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <FiCamera />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '8px',
        }}
      >
        <ListItem>
          <ListItemButton>
            <FiSettings />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Avatar variant="outlined" />
    </Sheet>
  );
}
