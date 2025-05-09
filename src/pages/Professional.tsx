import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';

const Professional: React.FC = () => {
  const professionalItems = [
    {
      title: 'Graduate Researcher',
      company: 'Tulane University',
      period: 'Sep 2021 - May 2025',
      description: 'Published 5+ papers in top venues such as SoCG, WADS, TSAS and ACM SIGSPATIAL. Developed and implemented over 3,000 lines of code for four organizational projects and co-mentored 5 undergraduate researchers.',
      image: '/tulane.jpg',
      location: 'New Orleans, LA, USA',
      tags: ['Research', 'Technical Writing', 'Mentoring'],
    },
    {
      title: 'Data Scientist',
      company: 'Tulane University (LA-CEAL NIH Project)',
      period: 'Jan 2021 - Nov 2021',
      description: 'Collected and labeled social media data of more than 25,000 users using the state-of-the-art NLP and machine learning practices.',
      image: '/la-ceal.jpeg',
      location: 'New Orleans, LA, USA',
      tags: ['NLP', 'PyTorch', 'Social Media Analysis', 'Data Visualization'],
    },
    {
      title: 'Research Software Engineer',
      company: 'Tulane University (School of Public Health and Tropical Medicine)',
      period: 'Jan 2021 - Nov 2021',
      description: 'Implemented and maintained a program to manage and classify collected GPS data from 100+ patients based on census data, crime reports, private datasets and public maps.',
      image: '/tulane-phtm.png',
      location: 'New Orleans, LA, USA',
      tags: ['GIS', 'Biomedical Informatics', 'Spatial Data Analysis', 'Data Visualization', 'Python'],
    },
    {
        title: 'IT Specialist',
        company: 'Tulane University (Pre-college Programs)',
        period: 'Jun 2020 - Aug 2020',
        description: 'Ensured high availability and uptime for the programs online platform, with a target of 99.9% uptime, with less than 10 minutes to acknowledge and less than 30 minutes to resolve issues.',
        image: '/pre.jpeg',
        location: 'Remote',
        tags: ['Customer Service', 'Information Technology'],
      },
      {
        title: 'Jr. Product Manager',
        company: 'AIESEC (Association Internationale des Étudiants en Sciences Économiques et Commerciales)',
        period: 'Aug 2017 - Feb 2018',
        description: 'Led a team of 3 developers in the creation of a customer support chatbot that offered 24/7 assistance and resolved up to 75% of submitted issues within 24 hours.',
        image: '/aieseciniran.jpg',
        location: 'Tehran, IR',
        tags: ['Chatbot Development', 'Information Technology', 'Python'],
      },
      {
        title: 'Front-end Developer Intern',
        company: 'Moduland.ir (Startup)',
        period: 'Jun 2017 - Aug 2017',
        description: 'Designed and developed a responsive and modern-looking website under Google’s Material Design guidelines which increased the company’s exposure to the clients roughly 60%.',
        image: '/moduland.jpg',
        location: 'Tehran, IR',
        tags: ['HTML', 'CSS', 'JavaScript', 'Material Design'],
      },
  ];

  const themeColor = '#FF9800'; // Orange

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
        Professional Experience
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {professionalItems.map((item, index) => (
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
                {item.company}
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

export default Professional; 