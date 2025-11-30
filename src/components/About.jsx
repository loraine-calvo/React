import { Container, Box, Typography, Grid, Paper, Divider } from '@mui/material';

function About() {
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
          GET TO KNOW ME
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          About Me
        </Typography>
        <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
      </Box>
      
      <Grid container spacing={4} alignItems="center">
 <Grid item xs={14} md={7}>   {/* ← Changed from md={5} to md={7} */}
 <Box sx={{ textAlign: 'center', my: { xs: 6, md: 9 } }}>
  <Box
    sx={{
      display: 'inline-block',
      width: { xs: '95%', sm: '85%', md: '78%', lg: '75%' },
      maxWidth: 1000,
      borderRadius: { xs: 7, md: 10 },
      overflow: 'hidden',
      boxShadow: '0 35px 90px rgba(0,0,0,0.25)',
      transition: 'all 0.5s ease',
      ml: { md: 8, lg: 12 },   // ← This pushes it nicely to the right on desktop
      '&:hover': {
        transform: 'translateY(-16px)',
        boxShadow: '0 50px 120px rgba(0,0,0,0.35)',
      },
    }}
  >
    <img
      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=1000&fit=crop"
      alt="Coding on laptop"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
  </Box>
</Box>
</Grid>

<Grid item xs={12} md={5}>   {/* ← Text now takes only 5 columns so image has more space */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
            BSIT Student & Front-End Developer
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#555', mb: 3 }}>
            Hello! I'm a passionate Information Technology student currently pursuing my degree. 
            I'm enthusiastic about web development and love learning new technologies. 
            Through my coursework and personal projects, I've gained hands-on experience 
            with React, JavaScript, and modern web development practices.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#555', mb: 3 }}>
            I'm constantly expanding my skills through online courses, coding challenges, 
            and building projects. I'm eager to apply my knowledge in real-world scenarios 
            and contribute to meaningful projects. My goal is to become a Front end developer 
            and create applications that make a positive impact.
          </Typography>
          <Grid container spacing={2}>
            {[
              { number: '15+', label: 'Projects Built' },
              { number: '2+', label: 'Years Learning' },
              { number: '5+', label: 'Technologies' }
            ].map((stat, idx) => (
              <Grid item xs={4} key={idx}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#667eea' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;