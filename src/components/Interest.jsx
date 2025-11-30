import { Box, Container, Typography, Grid, Card, CardContent, Divider } from '@mui/material';

function Interest() {
  const interests = [
    { icon: '💻', text: 'Web Development', color: '#667eea', description: 'Building modern web apps' },
    { icon: '📱', text: 'Mobile Apps', color: '#764ba2', description: 'Learning React Native' },
    { icon: '🎨', text: 'UI/UX Design', color: '#f093fb', description: 'Creating beautiful interfaces' },
    { icon: '🤖', text: 'AI & Machine Learning', color: '#4facfe', description: 'Exploring new frontiers' },
    { icon: '📚', text: 'Continuous Learning', color: '#43e97b', description: 'Always improving' },
    { icon: '🎮', text: 'Game Development', color: '#fa709a', description: 'Creating fun experiences' }
  ];

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
          WHAT I LOVE
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          My Interests
        </Typography>
        <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
      </Box>
      
      <Grid container spacing={3}>
        {interests.map((interest, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              elevation={3}
              sx={{ 
                textAlign: 'center',
                p: 3,
                height: '100%',
                borderRadius: 3,
                background: 'white',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: interest.color
                },
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    fontSize: '4rem',
                    mb: 2,
                    display: 'inline-block',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(10deg)'
                    }
                  }}
                >
                  {interest.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: interest.color, mb: 1 }}>
                  {interest.text}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {interest.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Interest;