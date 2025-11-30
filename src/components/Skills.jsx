import { Box, Container, Typography, Grid, Paper, LinearProgress, Divider } from '@mui/material';

function Skills() {
  const skillsData = [
    { name: 'Desining', level: 90, color: '#61dafb', icon: '⚛️' },
    { name: 'Memorization', level: 85, color: '#f7df1e', icon: '🟨' },
    { name: 'Database', level: 50, color: '#68a063', icon: '🟢' },
    { name: 'HTML/CSS', level: 95, color: '#e34c26', icon: '🎨' },
    { name: 'Material UI', level: 88, color: '#007fff', icon: '💎' },
    { name: 'Git/GitHub', level: 85, color: '#f05032', icon: '🔧' }
  ];

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #f5f7fa 100%)', py: 10 }}>
      <Container>
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
            WHAT I DO BEST
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            My Skills
          </Typography>
          <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
        </Box>
        
        <Grid container spacing={3}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  background: 'white',
                  transition: 'all 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: '2rem' }}>{skill.icon}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ color: skill.color, fontWeight: 700 }}>
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level}
                  sx={{ 
                    height: 12, 
                    borderRadius: 5,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                      borderRadius: 5,
                      boxShadow: `0 2px 8px ${skill.color}40`
                    }
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;