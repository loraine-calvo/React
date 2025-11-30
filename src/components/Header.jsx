import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

function Header() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            src="/profile.jpg"
             sx={{ 
              width: 40, 
              height: 40,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              fontWeight: 700
            }}
          >
            JD
          </Avatar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#333' }}>
            Loraine Calvo
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Typography sx={{ cursor: 'pointer', color: '#555', fontWeight: 500, '&:hover': { color: '#667eea' }, transition: 'all 0.3s' }}>About</Typography>
          <Typography sx={{ cursor: 'pointer', color: '#555', fontWeight: 500, '&:hover': { color: '#667eea' }, transition: 'all 0.3s' }}>Skills</Typography>
          <Typography sx={{ cursor: 'pointer', color: '#555', fontWeight: 500, '&:hover': { color: '#667eea' }, transition: 'all 0.3s' }}>Experience</Typography>
          <Typography sx={{ cursor: 'pointer', color: '#555', fontWeight: 500, '&:hover': { color: '#667eea' }, transition: 'all 0.3s' }}>Projects</Typography>
          <Typography sx={{ cursor: 'pointer', color: '#555', fontWeight: 500, '&:hover': { color: '#667eea' }, transition: 'all 0.3s' }}>Contact</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;