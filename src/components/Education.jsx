import { Container, Box, Typography, Card, CardContent, Chip, Stack, Divider } from '@mui/material';
import { School as SchoolIcon, EmojiEvents as TrophyIcon } from '@mui/icons-material';

function Education() {
  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            color: '#667eea', 
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: 2
          }}
        >
          ACADEMIC BACKGROUND
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Education
        </Typography>
        <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
      </Box>
      
      <Card 
        elevation={4}
        sx={{ 
          borderRadius: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s',
          '&:hover': { 
            transform: 'scale(1.02)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%'
          }
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)'
              }}
            >
              <SchoolIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box>
              <Typography variant="overline" sx={{ opacity: 0.9, fontWeight: 600 }}>
                2023 - Present ( 2025)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                Bachelor of Science in Information Technology
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="h6" sx={{ mb: 1, opacity: 0.95, fontWeight: 600 }}>
           Cebu Technological University- Argao Campus
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
            Currently pursuing a degree in Information Technology with focus on Programming, 
            web technologies, and database systems. 
          </Typography>
          
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 3 }} />
          
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TrophyIcon />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Achievements & Activities
              </Typography>
            </Box>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Chip 
                label="Current GPA: 1.8" 
                sx={{ 
                  background: 'rgba(255,255,255,0.25)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.9rem',
                  px: 1
                }} 
              />
              <Chip 
                label="Graphics and layout Artist" 
                sx={{ 
                  background: 'rgba(255,255,255,0.25)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.9rem',
                  px: 1
                }} 
              />
              <Chip 
                label="SI++ Member" 
                sx={{ 
                  background: 'rgba(255,255,255,0.25)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.9rem',
                  px: 1
                }} 
              />
              <Chip 
                label="YOLO" 
                sx={{ 
                  background: 'rgba(255,215,0,0.3)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.9rem',
                  px: 1
                }} 
              />
            </Stack>
          </Box>
          
          <Box>
            <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 600, mb: 1 }}>
              Relevant Coursework:
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              Data Structures & Algorithms • Web Development • Database Management • 
              Object-Oriented Programming • Software Engineering • Mobile App Development
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Education;