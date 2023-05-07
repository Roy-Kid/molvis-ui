import * as React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { closeSidebar } from '../utils/sidebarController';
import { Button } from '@mui/joy';
import Input from '@mui/joy/Input';
import { FiPlus, FiRefreshCcw } from 'react-icons/fi';

function SidePane(props: BoxProps) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          py: 1,
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'none',
            md: 'initial',
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

const content: Record<string, JSX.Element> = {
  'file': <div>   
      <SidePane>
        <Box
          sx={{
            p: 1,
            pb: 0.1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            fontSize="xs2"
            textColor="text.tertiary"
            textTransform="uppercase"
            letterSpacing="md"
            fontWeight="lg"
          >
            Load Data
          </Typography>
          <IconButton size="sm" variant="plain" >
            <FiPlus />
          </IconButton>
          <IconButton size="sm" variant="plain" >
            <FiRefreshCcw />
          </IconButton>
        </Box>
        <Box sx={{ p: 1 }}>
          <Input size="sm" disabled placeholder="File name" />
        </Box>
        <Box
          sx={{
            p: 1,
            pb: 0.1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            fontSize="xs2"
            textColor="text.tertiary"
            textTransform="uppercase"
            letterSpacing="md"
            fontWeight="lg"
          >
            trajectory
          </Typography>
          <IconButton size="sm" variant="plain" >
            <FiPlus />
          </IconButton>
          <IconButton size="sm" variant="plain" >
            <FiRefreshCcw />
          </IconButton>
        </Box>
        <Box sx={{ p: 1 }}>
          <Input size="sm" disabled placeholder="File name" />
        </Box>
      </SidePane>
  </div>
};


export default function SecondSidebar() {

  return (
    <React.Fragment>
      <Sheet
        className="SecondSidebar"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
          },
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          top: 0,
          p: 1,
          py: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {content["file"]}
      </Sheet>
    </React.Fragment>
  );
}
