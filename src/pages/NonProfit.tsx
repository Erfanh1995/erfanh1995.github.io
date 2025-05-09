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

const NonProfit: React.FC = () => {
  const themeColor = '#00BCD4'; // Cyan

  const nonProfitItems = [
    {
      title: 'IT Team Lead',
      organization: 'AIESEC in University of Tehran',
      role: 'Finance & Leadership Structure (F&L)',
      description: 'Led a team of volunteers in making online tools to increase awareness of AIESEC.',
      image: '/aiesecinut.jpg',
      location: 'Tehran, IR',
      period: 'Aug 2017 - Oct 2017',
      tags: ['Education', 'Youth Development', 'Technology'],
    },
    {
      title: 'Team Member',
      organization: 'AIESEC in Amirkabir University of Technology',
      role: 'OutGoing Exchange (OGX)',
      description: 'Develope new ideas to promote projects and analyse client needs to to make further decisions easier for the local committee.',
      image: '/aiesecinaut.jpg',
      location: 'Tehran, IR',
      period: 'Feb 2017 - Aug 2017',
      tags: ['Marketing', 'Community', 'Event Management'],
    },
    {
      title: 'Global Volunteer',
      organization: 'AIESEC in South China University of Technology',
      role: 'Mission Green Project',
      description: 'Promoted recycling and renewable energy projects in China and educcated people about recycling and its importance.',
      image: '/aiesec.jpg',
      location: 'Guangzhou, China',
      period: 'Jul 2016 - Aug 2016',
      tags: ['Environment', 'Education', 'Recycling', 'Renewable Energy'],
    },
  ];

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
        Non-Profit Work
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {nonProfitItems.map((item, index) => (
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
                {item.organization}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {item.role} • {item.location} • {item.period}
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

export default NonProfit; 