import { Box, Container, Typography, Avatar, Chip, IconButton, Button, Stack, Fade } from '@mui/material';
import { 
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Download as DownloadIcon,
  LocationOn as LocationIcon,
  Language as WebIcon
} from '@mui/icons-material';

// Import your profile image
import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: { xs: '60px 20px', md: '100px 0' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box>
            <Box 
              sx={{ 
                position: 'relative',
                display: 'inline-block',
                mb: 3
              }}
            >
              <Avatar 
                src={profileImage}
                alt="Loraine Calvo"
                sx={{ 
                  width: { xs: 150, md: 180 }, 
                  height: { xs: 150, md: 180 }, 
                  margin: '0 auto',
                  border: '6px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 10px rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                JD
              </Avatar>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  width: 24,
                  height: 24,
                  background: '#4caf50',
                  border: '4px solid white',
                  borderRadius: '50%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
              />
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
              Hi, Loraine Calvo 👋
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, opacity: 0.95, fontWeight: 500 }}>
              Bsit Student | 3rd Year
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap' }}>
              <Chip 
                icon={<LocationIcon sx={{ fontSize: 16 }} />} 
                label="Cebu City, Philippines" 
                sx={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 500
                }} 
              />
              <Chip 
                icon={<WebIcon sx={{ fontSize: 16 }} />} 
                label="Available for Part-time" 
                sx={{ 
                  background: 'rgba(76, 175, 80, 0.3)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 500
                }} 
              />
            </Stack>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, margin: '0 auto 30px', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Crafting digital experiences with passion and precision. Specialized in building 
              scalable web applications that solve real-world problems.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
              {[
                { icon: <GitHubIcon />, label: 'GitHub' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <EmailIcon />, label: 'Email' },
                { icon: <PhoneIcon />, label: 'Phone' }
              ].map((social, idx) => (
                <IconButton 
                  key={idx}
                  sx={{ 
                    color: 'white',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { 
                      transform: 'translateY(-4px) scale(1.1)',
                      background: 'rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large"
                startIcon={<DownloadIcon />}
                sx={{ 
                  background: 'white',
                  color: '#667eea',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  '&:hover': { 
                    background: '#ffd700',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.25)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                Download CV
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  borderWidth: 2,
                  '&:hover': { 
                    borderColor: 'white',
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                    borderWidth: 2
                  },
                  transition: 'all 0.3s'
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Hero;