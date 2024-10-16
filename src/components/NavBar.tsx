import * as React from 'react';
import { Box, IconButton } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import MapsHomeWorkIcon  from '@mui/icons-material/Celebration';
import ColorSchemeToggle from './ColorSchemeToggle';

export default function HeaderSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        px: 1.5,
        py: 1,
        zIndex: 10000,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton size="sm" variant="soft">
          <MapsHomeWorkIcon />
        </IconButton>
        <Typography component="h1" sx={{ fontWeight: 'xl' }}>
          Sherehe
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Box
          sx={{ gap: 1, alignItems: 'center', display: { xs: 'none', sm: 'flex' } }}
        >
          <Avatar
            variant="outlined"
            size="sm"
            src="https://avatars.githubusercontent.com/u/47192245?v=4"
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">Jeff Ubayi</Typography>
            <Typography level="body-xs">ubeezy@github.com</Typography>
          </Box>
        </Box>
        <ColorSchemeToggle sx={{ alignSelf: 'center' }} />
      </Box>
    </Box>
  );
}