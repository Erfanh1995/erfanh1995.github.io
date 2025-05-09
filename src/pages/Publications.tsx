import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Publications = () => {
  const themeColor = '#9C27B0'; // Purple

  const publicationItems = [
    {
      title: 'Roadster: Improved Algorithms for Subtrajectory Clustering and Map Construction',
      authors: 'Kevin Buchin, Maike Buchin, Joachim Gudmundsson, Jorren Hendriks, Erfan Hosseini Sereshgi, Rodrigo I. Silveira, Jorrick Sleijster, Frank Staals and Carola Wenk',
      journal: 'Computers & Geosciences, Volume 196, February 2025',
      year: '2025',
      //description: 'This paper presents novel approaches to natural language processing using advanced machine learning techniques.',
      doi: '10.1016/j.cageo.2024.105845',
      tags: ['Computational Geometry', 'GIS', 'Map Construction', 'Subtrajectory Clustering'],
      link: 'https://doi.org/10.1016/j.cageo.2024.105845',
    },
    {
      title: 'Length-Preserving Matching Between Closed Curves',
      authors: 'Erfan Hosseini Sereshgi, Maarten Löffler, Frank Staals and Carola Wenk',
      journal: ' The 31th Fall Workshop on Computational Geometry',
      year: '2024',
      //description: 'A comprehensive review of recent advances in deep learning applications for computer vision tasks.',
      //doi: 'https://www.cs.tufts.edu/research/geometry/FWCG24/papers/FWCG_24_paper_21.pdf',
      tags: ['Computational Geometry', 'Polygonal Curves', 'Shape Matching'],
      link: 'https://www.cs.tufts.edu/research/geometry/FWCG24/papers/FWCG_24_paper_21.pdf',
    },
    {
      title: 'Map Stitcher: Graph Sampling-based Map Conflation',
      authors: 'Erfan Hosseini Sereshgi and Carola Wenk',
      journal: 'The 3rd ACM SIGSPATIAL International Workshop on Spatial Big Data and AI for Industrial Applications (GeoIndustry’24)',
      year: '2024',
      //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
      doi: '10.1145/3681766.3699604',
      tags: ['GIS', 'Computational Geometry', 'Map Conflation'],
      link: 'https://doi.org/10.1145/3681766.3699604',
    },
    {
        title: 'Graph Sampling for Map Comparison',
        authors: 'Jordi Aguilar, Kevin Buchin, Maike Buchin, Erfan Hosseini Sereshgi, Rodrigo I. Silveira and Carola Wenk',
        journal: 'ACM Transactions on Spatial Algorithms and Systems, Volume 10, Issue 3',
        year: '2024',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        doi: '10.1145/3662733',
        tags: ['GIS', 'Computational Geometry', 'Graph Comparison'],
        link: 'https://doi.org/10.1145/3662733',
      },
      {
        title: 'Drawing Reeb Graphs',
        authors: 'Erin Chambers, Brittany Terese Fasy, Erfan Hosseini Sereshgi, Maarten Löffler and Sarah Percival',
        journal: 'The 31st International Symposium on Graph Drawing and Network Visualization (GD)',
        year: '2023',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        doi: '10.1007/978-3-031-49275-4',
        tags: ['Computational Geometry', 'Graph Drawing', 'Crossing Number'],
        link: 'https://doi.org/10.1007/978-3-031-49275-4',
      },
      {
        title: 'On Length-sensitive Fréchet Similarity',
        authors: 'Kevin Buchin, Brittany Terese Fasy, Erfan Hosseini Sereshgi and Carola Wenk',
        journal: 'The 18th Algorithms and Data Structures Symposium (WADS)',
        year: '2023',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        doi: '10.1007/978-3-031-38906-1_15',
        tags: ['Computational Geometry', 'Fréchet Distance', 'Geometric Graph Comparison'],
        link: 'https://doi.org/10.1007/978-3-031-38906-1_15',
      },
      {
        title: 'Merging Roadmaps using Graph Distance Measures',
        authors: 'Erfan Hosseini Sereshgi and Carola Wenk',
        journal: 'The 30th Fall Workshop on Computational Geometry',
        year: '2022',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        //doi: '10.1007/978-3-031-38906-1_15',
        tags: ['GIS', 'Computational Geometry', 'Map Conflation'],
        link: 'https://donsheehy.github.io/fwcg2022/abstracts/FWCG2022_paper_9659.pdf',
      },
      {
        title: 'Graph Sampling for Map Comparison (best paper award)',
        authors: 'Jordi Aguilar, Kevin Buchin, Maike Buchin, Erfan Hosseini Sereshgi, Rodrigo I. Silveira and Carola Wenk',
        journal: 'The 3rd ACM SIGSPATIAL International Workshop on Spatial Gems',
        year: '2021',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        doi: '10.1145/3617291.3617293',
        tags: ['GIS', 'Computational Geometry', 'Graph Comparison'],
        link: 'https://doi.org/10.1145/3617291.3617293',
      },
      {
        title: 'Measuring Length-Preserving Fréchet Correspondence for Graphs in R2',
        authors: 'Kevin Buchin, Brittany Terese Fasy, Erfan Hosseini Sereshgi and Carola Wenk',
        journal: 'The 29th Fall Workshop on Computational Geometry',
        year: '2021',
        //description: 'Research on efficient neural network architectures suitable for deployment on resource-constrained edge devices.',
        //doi: '',
        tags: ['Computational Geometry', 'Fréchet Distance', 'Geometric Graph Comparison'],
        link: 'https://comptag.github.io/fwcg21/assets/papers/FWCG2021_paper_10.pdf',
      },
      {
        title: 'Improved Map Construction using Subtrajectory Clustering',
        authors: 'Kevin Buchin, Maike Buchin, Joachim Gudmundsson, Jorren Hendriks, Erfan Hosseini Sereshgi, Vera Sacristán, Rodrigo I. Silveira, Jorrick Sleijster, Frank Staals and Carola Wenk',
        journal: 'The 4th ACM SIGSPATIAL Workshop on Location-Based Recommendations, Geosocial Networks, and Geoadvertising',
        year: '2020',
        //description: 'This paper presents novel approaches to natural language processing using advanced machine learning techniques.',
        doi: '10.1145/3423334.3431451',
        tags: ['Computational Geometry', 'GIS', 'Map Construction', 'Subtrajectory Clustering'],
        link: 'https://doi.org/10.1145/3423334.3431451',
      },
      {
        title: 'Computing Relevant Subtrajectory Bundles Faster',
        authors: 'Erfan Hosseini Sereshgi and Carola Wenk',
        journal: 'Symposium on Computational Geometry (SoCG): Young Researchers Forum',
        year: '2020',
        //description: 'This paper presents novel approaches to natural language processing using advanced machine learning techniques.',
        //doi: '',
        tags: ['Computational Geometry', 'GIS', 'Map Construction', 'Subtrajectory Clustering'],
        link: 'https://www.computational-geometry.org/YRF/cgyrf2020.pdf',
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
        Publications
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {publicationItems.map((item, index) => (
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
              <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {item.authors}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {item.journal} • {item.year}
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
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Link 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: themeColor,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Read Paper
                  <OpenInNewIcon sx={{ fontSize: 16 }} />
                </Link>
                <Typography variant="body2" color="text.secondary">
                  DOI: {item.doi}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Publications; 