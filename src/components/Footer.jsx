import { Box, Container, Typography, IconButton, Grid, Stack, Divider } from '@mui/material';
import { 
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Twitter as TwitterIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        mt: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container sx={{ py: 6, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Loraine Calvo
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8, mb: 2 }}>
              Full Stack Developer passionate about creating beautiful and functional web experiences. 
              Let's build something amazing together!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              📍 Cebu City, Philippines
            </Typography>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <Typography 
                  key={link}
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateX(5px)',
                      color: '#ffd700'
                    }
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>
          
          {/* Connect Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Let's Connect!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Follow me on social media and let's stay in touch.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {[
                { icon: <GitHubIcon />, label: 'GitHub' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <EmailIcon />, label: 'Email' },
                { icon: <TwitterIcon />, label: 'Twitter' }
              ].map((social, idx) => (
                <IconButton 
                  key={idx}
                  sx={{ 
                    color: 'white',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { 
                      background: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-4px) scale(1.1)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
        
        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            © {currentYear} Loraine Calvo. Made with 
            <FavoriteIcon sx={{ fontSize: 16, color: '#ff6b6b', animation: 'pulse 1.5s ease-in-out infinite' }} /> 
            using React & Material UI
          </Typography>
        </Box>
      </Container>
      
      {/* Pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Footer;