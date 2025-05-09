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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon2 from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';

const About: React.FC = () => {
  const interests = [
    'Spatial Algorithms',
    'Computational Geometry',
    'GIS',
    'Algorithms and Data Structures',
    'Spatial Data Analysis',
    'Navigation',
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        About Me
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <Card 
            sx={{ 
              height: '100%',
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
                width: '100%',
                height: 300,
                objectFit: 'cover',
              }}
              image={process.env.PUBLIC_URL + '/headshot.jpg'}
              alt="Headshot"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Erfan Hosseini Sereshgi
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Graduate Researcher • Tulane University
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                {[
                  { icon: <GitHubIcon />, url: 'https://github.com/Erfanh1995' },
                  { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/Erfanh1995' },
                  { icon: <SchoolIcon2 />, url: 'https://scholar.google.com/citations?user=IJ96xKgAAAAJ&hl=en' },
                  { icon: <EmailIcon />, url: 'mailto:me@erfanhosseini.com' },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'inherit',
                      '&:hover': {
                        color: '#607D8B',
                      },
                    }}
                  >
                    {link.icon}
                  </Link>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
          <Card 
            sx={{ 
              height: '100%',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Biography
              </Typography>
              <Typography variant="body1" paragraph>
              Highly motivated and results-oriented software developer with a deep passion for research-intensive software engineering and data analysis in navigation, routing and anomaly detection. Demonstrated ability to conduct impactful research, develop scalable algorithms, and implement efficient software solutions in C++, Java and Python. Strong publication record in leading computer science venues and extensive experience in mentoring. Specialized in shape/graph comparison methods and spatial data analysis.             </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Research Interests
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    label={interest}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(96, 125, 139, 0.1)',
                      color: '#607D8B',
                      '&:hover': {
                        backgroundColor: 'rgba(96, 125, 139, 0.2)',
                      },
                    }}
                  />
                ))}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Contact Information
              </Typography>
              <Typography variant="body1">
                Email: me@erfanhosseini.com
              </Typography>
              <Typography variant="body1">
                Office: #309 Stanley Thomas Hall
              </Typography>
              <Typography variant="body1">
                Address: Tulane University, New Orleans, LA
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default About; 