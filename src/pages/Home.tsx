import React from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Link,
  Chip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home: React.FC = () => {
  const theme = useTheme();

  const newsItems = [
    {
      title: 'Tulane Data Hub Graduate Award',
      date: 'May 4, 2023',
      description: 'I recieved Tulane Connolly Alexander Institute for Data Science Summer Graduate Award for my research on map conflation. (Thanks to Data Hub award committee)',
      image: '/DataHUB.jpeg',
      link: 'https://tulanedatahub.com/',
      tags: ['Research', 'Award'],
    },
    {
      title: 'Best Paper Award at ACM SIGSPATIAL Spatial Gems',
      date: 'November 2, 2021',
      description: 'My presentation of Graph Sampling for Map Comparison at 2021 ACM Sigspatial Spatial Gems. (Special thanks to the organizers John Krumm, Andreas Züfle and Cyrus Shahabi)',
      image: '/spatialgems.jpg',
      link: 'https://www.spatialgems.net/videos?wix-vod-video-id=0a5234583de34a61aad39d94fd4cd0d2&wix-vod-comp-id=comp-kvqvujsp',
      tags: ['Conference', 'Presentation', 'Award'],
    },
    {
      title: 'My Career Talk for Computer Science Education Week',
      date: 'December 3, 2020',
      description: 'I recently participated in a career talk by Code Nola to promote computer science among students during CS Ed week. (Production and editing by Lucia Berliner)',
      image: '/csed.png',
      link: 'https://youtu.be/G7-izb-vWUI',
      tags: ['Talk', 'Teaching'],
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Welcome to My Website
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: theme.palette.primary.main }}>
        Latest News
      </Typography>

      <Grid container spacing={3}>
        {newsItems.map((item, index) => (
          <Box key={index} sx={{ width: '100%' }}>
            <Card 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: '100%', sm: 240 },
                  height: { xs: 200, sm: 'auto' },
                  objectFit: 'cover',
                }}
                image={process.env.PUBLIC_URL + item.image}
                alt={item.title}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2 }}>
                  {item.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        backgroundColor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: `${theme.palette.primary.main}25`,
                        },
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {item.date}
                </Typography>
                <Typography variant="body1" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Read More →
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Home; 