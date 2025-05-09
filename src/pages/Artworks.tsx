import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Artworks: React.FC = () => {
  const artworkItems = [
    {
        title: 'Rabbana',
        medium: 'Album Art',
        year: '2023',
        description: 'MBAL’s single, Rabbana',
        tags: ['Digital Art', 'Album Art'],
        image: '/Rabbana.jpg',
    },
    {
      title: 'Chaotic Silence',
      medium: 'Album Art',
      year: '2021',
      description: 'MBAL’s first instrumental album, Chaotic Silence',
      tags: ['Digital Art', 'Album Art'],
      image: '/chaotic_silence.jpg',
    },
    {
      title: 'PERSONAL©',
      medium: 'Digital Art Collection',
      year: '2016 - Present',
      description: 'This is a group of artworks that grows by time. Distinguished by the common dark gray background and theme with simple yet complex shapes and patterns.',
      tags: ['Digital Art'],
      image: '/personal.jpg',
    },
    {
      title: 'AIESEC brochures',
      medium: 'Printed Media',
      year: '2017',
      description: 'Informational brochures for AIESEC, a global organization that provides international volunteering and internship opportunities.',
      tags: ['Data Art', 'Visualization', 'Design'],
      image: '/brouch.jpg',
    },
    {
        title: 'The 9th AUT Annual 10-day of Mathematics Posters',
        medium: 'Posters',
        year: '2015',
        description: 'Posters for the 9th Annual AUT 10-day of Mathematics, a celebration of mathematics and its applications.',
        tags: ['Illustration', 'Digital Art'],
        image: '/math9th.jpg',
    },
    {
        title: 'AUT Annual 10-day of Mathematics Logo',
        medium: 'Icon',
        year: '2015',
        description: 'A Logo for the 9th Annual AUT 10-day of Mathematics.',
        tags: ['Illustration', 'Digital Art', 'Caligraphy'],
        image: '/10-day.jpg',
    },
  ];

  const themeColor = '#FF5722'; // Deep Orange

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
        Artworks
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {artworkItems.map((item, index) => (
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
                {item.medium}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {item.year}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
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

export default Artworks; 