import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';

const Education: React.FC = () => {
  const educationItems = [
    {
      title: 'PhD in Computer Science',
      institution: 'Tulane University',
      period: '2018 - 2025',
      description: 'Research focused on computational geometry and GIS under supervision of Prof. Carola Wenk. Published multiple papers in top-tier conferences.',
      image: '/tu.png',
      location: 'New Orleans, LA, USA',
      tags: ['Computational Geometry', 'Algorithms and Data Structures', 'GIS'],
    },
    {
      title: 'BSc in Computer Science',
      institution: 'Amirkabir University of Technology (Tehran Polytechnic)',
      period: '2014 - 2018',
      description: 'Focused on computational geometry and algorithms under supervision of Prof. Ali Mohades and Prof. Fatemeh Zare. Graduated with honors among top 5 students in my cohort.',
      image: '/poly.png',
      location: 'Tehran, Iran',
      tags: ['Algorithms and Data Structures', 'Computational Geometry'],
    },
    {
      title: 'High School Diploma',
      institution: 'Allame Helli IV High School',
      period: '2010 - 2014',
      description: 'Ranked #1 for 4 years in one of the NODET High schools in Tehran',
      image: '/sampad.png',
      location: 'Tehran, Iran',
      tags: ['Mathematics'],
    },
  ];

  const themeColor = '#4CAF50'; // Green

  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          mb: 4,
        }}
      >
        Education
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {educationItems.map((item, index) => (
          <Card 
            key={index}
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{ 
                width: { xs: '100%', md: 200 },
                height: { xs: 200, md: 'auto' },
                objectFit: 'cover',
              }}
              image={process.env.PUBLIC_URL + item.image}
              alt={item.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {item.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {item.period} • {item.location}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {item.tags.map((tag, tagIndex) => (
                  <Chip 
                    key={tagIndex} 
                    label={tag} 
                    size="small"
                    sx={{ 
                      backgroundColor: `${themeColor}15`,
                      color: themeColor,
                      '&:hover': {
                        backgroundColor: `${themeColor}25`,
                      },
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Education; 