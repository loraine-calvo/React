import { Container, Box, Typography, Grid, Card, CardContent, Chip, Button, Divider, Stack } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Material UI. Features responsive design, smooth animations, and modern UI components to showcase my projects and skills.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Material UI', 'JavaScript'],
      color: '#667eea',
      github: '#',
      demo: '#'
    },
    {
      title: 'Student Management System',
      description: 'A web-based system for managing student records, grades, and attendance. Group capstone project with CRUD operations and user authentication features.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: '#764ba2',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeather API. Displays current weather conditions, 5-day forecast, and location-based weather information with clean UI.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tech: ['React', 'API Integration', 'CSS'],
      color: '#f093fb',
      github: '#',
      demo: '#'
    },
    {
      title: 'Todo List Application',
      description: 'Interactive task management app with local storage. Features include add, edit, delete tasks, mark as complete, and filter by status. Built as a learning project.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tech: ['React', 'Local Storage', 'Hooks'],
      color: '#4facfe',
      github: '#',
      demo: '#'
    },
    {
      title: 'Allowance Tracker App',
      description: 'Scientific calculator with basic and advanced operations. Responsive design that works on all devices. Implemented using React state management.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
      tech: ['React', 'JavaScript', 'CSS'],
      color: '#43e97b',
      github: '#',
      demo: '#'
    },
    {
      title: 'Recipe Finder',
      description: 'Search and discover recipes using the Spoonacular API. Browse by ingredients, cuisine types, and dietary restrictions. Save favorite recipes locally.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
      tech: ['React', 'API', 'Bootstrap'],
      color: '#fa709a',
      github: '#',
      demo: '#'
    }
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
          MY WORK
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Projects & Practice Work
        </Typography>
        <Divider sx={{ width: 80, margin: '0 auto', height: 4, background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
      </Box>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              elevation={4}
              sx={{ 
                height: '100%',
                borderRadius: 4,
                transition: 'all 0.3s',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { 
                  transform: 'translateY(-16px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                },
                '&:hover .project-image': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Box
                sx={{
                  height: 200,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <Box
                  className="project-image"
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(180deg, transparent 0%, ${project.color}40 100%)`
                  }}
                />
              </Box>
              
              <Box 
                sx={{ 
                  height: 6,
                  background: `linear-gradient(90deg, ${project.color} 0%, #764ba2 100%)`
                }}
              />
              
              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: project.color }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: '#666', lineHeight: 1.7, flexGrow: 1 }}>
                  {project.description}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tech.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech} 
                        size="small"
                        sx={{ 
                          background: `${project.color}15`,
                          color: project.color,
                          fontWeight: 600,
                          border: `1px solid ${project.color}30`
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
                
                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    fullWidth
                    sx={{ 
                      background: project.color,
                      fontWeight: 600,
                      '&:hover': {
                        background: project.color,
                        filter: 'brightness(1.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px ${project.color}60`
                      },
                      transition: 'all 0.3s'
                    }}
                  >
                    View
                  </Button>
                  <Button 
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    fullWidth
                    sx={{ 
                      borderColor: project.color,
                      color: project.color,
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: project.color,
                        background: `${project.color}10`,
                        borderWidth: 2
                      }
                    }}
                  >
                    Code
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;