import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';

const Teaching = () => {
  const themeColor = '#E91E63'; // Pink

  const teachingItems = [
    {
      title: 'Algorithms',
      semester: 'Fall 2024',
      institution: 'Tulane University',
      description: 'Teaching Assistant',
      tags: ['Graduate', 'Core Course'],
    },
    {
      title: 'Computational Geometry',
      semester: 'Fall 2023',
      institution: 'Tulane University',
      description: 'Teaching Assistant',
      tags: ['Graduate', 'Advanced'],
    },
    {
      title: 'Arduino',
      semester: 'Summer 2022',
      institution: 'Tulane Pre-college Programs',
      description: 'Instructor',
      tags: ['Middle School', 'Project-Based'],
    },
    {
        title: 'Electrical Engineering',
        semester: 'Summer 2022',
        institution: 'Tulane Pre-college Programs',
        description: 'Instructor',
        tags: ['High School', 'Project-Based'],
    },
    {
        title: 'Game Design (Python)',
        semester: 'Summer 2022',
        institution: 'Tulane Pre-college Programs',
        description: 'Instructor',
        tags: ['High School', 'Project-Based'],
    },
    {
        title: 'Robotics',
        semester: 'Summer 2022',
        institution: 'Tulane Pre-college Programs',
        description: 'Instructor',
        tags: ['Middle School', 'Project-Based'],
    },
    {
        title: 'Introduction to Discrete Math',
        semester: 'Fall 2020',
        institution: 'Tulane University',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
    },
    {
        title: 'Introduction to Computer Science I',
        semester: 'Spring 2020',
        institution: 'Tulane University',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
    },
    {
        title: 'Introduction to Algorithms',
        semester: 'Fall 2019',
        institution: 'Tulane University',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
    },
    {
        title: 'Game Design (Python)',
        semester: 'Summer 2019',
        institution: 'Tulane Pre-college Programs',
        description: 'Instructor',
        tags: ['High School', 'Project-Based'],
    },
    {
        title: 'Robotics',
        semester: 'Summer 2019',
        institution: 'Tulane Pre-college Programs',
        description: 'Instructor',
        tags: ['Middle School', 'Project-Based'],
    },
    {
        title: 'Introduction to Computer Science I',
        semester: 'Spring 2019',
        institution: 'Tulane University',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
    },
    {
        title: 'Introduction to Computer Science I',
        semester: 'Fall 2018',
        institution: 'Tulane University',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
    },
    {
        title: 'Operating Systems',
        semester: 'Spring 2017',
        institution: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: 'Teaching Assistant',
        tags: ['Undergraduate', 'Core Course'],
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
        Teaching
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {teachingItems.map((item, index) => (
          <Card 
            key={index}
            sx={{ 
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {item.semester} • {item.institution}
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

export default Teaching; 