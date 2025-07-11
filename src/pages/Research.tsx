import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';

const Research: React.FC = () => {
  const researchTopics = [
    {
      title: 'Distance Measures for Geometric Data',
      description: 'We are interested in the study of distance measures for geometric data including point sets, curves, and surfaces. We are also interested in the study of distance measures for geometric data in high-dimensional spaces.',
      image: '/distance.png',
      collaborators: 'Kevin Buchin, Maike Buchin, Erin Chambers, Brittany Fasy, Maarten Löffler, Elizabeth Munch, Sarah Percival, Frank Staals, Carola Wenk, and many more...',
      tags: ['Algorithms', 'Geometric Graphs', 'Shape Matching', 'Distance Measures'],
    },
    {
      title: 'Geometric and Topological Algorithms for Analyzing Road Network Data',
      description: 'Development of novel approaches for spatial data analysis and visualization. Research on map construction, spatial clustering, GPS trajectory analysis, map comparison, map conflation, and geographic data processing for real-world applications.',
      image: '/map.png',
      collaborators: 'Kevin Buchin, Maike Buchin, Rodrigo Silveira, Frank Staals, Carola Wenk, and many more...',
      tags: ['Spatial Analysis', 'Trajectory Analysis', 'Data Visualization', 'Spatial Clustering'],
    },
    {
      title: 'Modeling Movement on Transportation Networks Using Uncertain Data',
      description: 'Develop probabilistic network movement models that use as many available data sources as possible to extract meaningful traffic and movement information automatically from the data.',
      image: '/pol.png',
      collaborators: 'Mauryan Uppalapati, Carola Wenk, Andreas Züfle and many more...',
      tags: ['Urban Simulations', 'Spatial Data Analysis', 'Artificial Intelligence', 'Movement Data'],
    },
    {
      title: 'Application of Spatial Data in Urban Planning and Public Health',
      description: 'Application of machine learning techniques to spatial problems in other fields such as sociology, public health, economics, and urban planning. ',
      image: '/nola.png',
      collaborators: 'Carola Wenk, and many more...',
      tags: ['Spatial ML', 'Pattern Recognition', 'Urban Planning'],
    },
    {
        title: 'Routing Algorithms and Trip Planning',
        description: 'Introducing reactive routing algorithms that adapt to dynamically changing travel-times are essential technical components for Traffic Estimation and Prediction Systems.',
        image: '/route.png',
        collaborators: 'Carola Wenk, and many more...', 
        tags: ['Traffic Estimation', 'Routing', 'Trip Planning'],
      },
    {
        title: 'Automatic Cartography Solutions for Self-Driving Vehicles',
        description: 'Development of automatic cartography solutions and producing HD maps for self-driving vehicles.',
        image: '/car.png',
        collaborators: 'N/A', 
        tags: ['Self-Driving Vehicles', 'Cartography', 'Geometric Data Structures'],
      },
    {
        title: 'Applications of Computational Geometry in Bioinformatics',
        description: 'Application of computational geometry to bioinformatics problems. Research on computational geometry for protein structure prediction, gene expression alignment, and clustering.',
        image: '/gene-ex.png',
        collaborators: 'Ali Mohades, Fatemeh Zare, and many more...',
        tags: ['Bioinformatics', 'Computational Geometry', 'Gene Expression Alignment', 'Clustering'],
    },
  ];

  const themeColor = '#9C27B0'; // Purple

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
        Research Areas
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {researchTopics.map((topic, index) => (
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
              image={process.env.PUBLIC_URL + topic.image}
              alt={topic.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                {topic.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Collaborators:</strong> {topic.collaborators}
              </Typography>
              <Typography variant="body1" paragraph>
                {topic.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {topic.tags.map((tag, tagIndex) => (
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

export default Research; 