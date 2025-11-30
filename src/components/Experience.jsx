import { Box, Container, Typography, Card, CardContent, Chip, Stack, Divider } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

function Experience() {
  const experiences = [
    {
      title: 'Web Development Projects',
      company: 'Personal Learning',
      period: '2024 - Present',
      description: 'Building full-stack web applications using React, Node.js, and modern frameworks. Created portfolio websites, e-commerce platforms, and interactive dashboards.',
      skills: ['React', 'JavaScript', 'Material UI']
    },
    {
      title: 'Group Capstone Project',
      company: 'Senior High School Project',
      period: '2023',
      description: 'Collaborated with team members to develop a comprehensive web application. Managed frontend development and implemented responsive design principles.',
      skills: ['Team Collaboration', 'Python', 'Git']
    },
    {
      title: 'Online Course Completion',
      company: 'Self-Learning',
      period: '2023 - 2024',
      description: 'Completed multiple online courses in web development, including React, JavaScript ES6+, and CSS frameworks. Built several practice projects to reinforce learning.',
      skills: ['HTML', 'CSS', 'JavaScript']
    }
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
            MY JOURNEY
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Learning Experience
          </Typography>
          <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
        </Box>
        
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #667eea, #764ba2)',
              transform: { md: 'translateX(-50%)' }
            }}
          />
          
          {experiences.map((exp, index) => (
            <Box 
              key={index}
              sx={{ 
                position: 'relative',
                mb: 4,
                display: 'flex',
                justifyContent: index % 2 === 0 ? { md: 'flex-start' } : { md: 'flex-end' }
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '12px', md: '50%' },
                  top: '24px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '4px solid #667eea',
                  transform: { md: 'translateX(-50%)' },
                  zIndex: 1,
                  boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.2)'
                }}
              />
              
              <Card 
                elevation={3}
                sx={{ 
                  width: { xs: 'calc(100% - 60px)', md: '45%' },
                  ml: { xs: '60px', md: 0 },
                  borderRadius: 3,
                  borderLeft: `5px solid ${index === 0 ? '#667eea' : index === 1 ? '#764ba2' : '#f093fb'}`,
                  transition: 'all 0.3s',
                  '&:hover': { 
                    transform: index % 2 === 0 ? 'translateX(10px)' : 'translateX(-10px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <SchoolIcon sx={{ color: '#667eea' }} />
                    <Chip 
                      label={exp.period} 
                      size="small" 
                      sx={{ 
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#667eea', mb: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#666', mb: 2 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', mb: 2, lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {exp.skills.map((skill, idx) => (
                      <Chip 
                        key={idx}
                        label={skill}
                        size="small"
                        sx={{
                          background: '#f5f7fa',
                          fontWeight: 500,
                          '&:hover': {
                            background: '#667eea',
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;