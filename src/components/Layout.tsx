import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Fab,
  Drawer,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PaletteIcon from '@mui/icons-material/Palette';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon2 from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useTheme as useAppTheme } from '../theme.ts';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [themeMenuAnchor, setThemeMenuAnchor] = useState<null | HTMLElement>(null);
  const { themeMode, setThemeMode, isDarkMode } = useAppTheme();
  const muiTheme = useTheme();

  const navItems = [
    { 
      label: 'Home', 
      path: '/', 
      icon: <HomeIcon />,
      color: '#2196F3', // Blue
      tooltip: 'Welcome to my website',
    },
    { 
      label: 'Education', 
      path: '/education', 
      icon: <SchoolIcon />,
      color: '#4CAF50', // Green
      tooltip: 'My academic background and qualifications',
    },
    { 
      label: 'Professional', 
      path: '/professional', 
      icon: <WorkIcon />,
      color: '#FF9800', // Orange
      tooltip: 'My work experience and professional journey',
    },
    { 
      label: 'Research', 
      path: '/research', 
      icon: <ScienceIcon />,
      color: '#673AB7', // Deep Purple
      tooltip: 'My research areas and topics',
    },
    { 
      label: 'Publications', 
      path: '/publications', 
      icon: <ArticleIcon />,
      color: '#9C27B0', // Purple
      tooltip: 'My research papers and publications',
    },
    { 
      label: 'Teaching', 
      path: '/teaching', 
      icon: <ClassIcon />,
      color: '#E91E63', // Pink
      tooltip: 'My teaching experience and courses',
    },
    { 
      label: 'Non-Profit', 
      path: '/non-profit', 
      icon: <VolunteerActivismIcon />,
      color: '#00BCD4', // Cyan
      tooltip: 'My non-profit work and community involvement',
    },
    { 
      label: 'Artworks', 
      path: '/artworks', 
      icon: <PaletteIcon />,
      color: '#FF5722', // Deep Orange
      tooltip: 'My artistic works and creative projects',
    },
    { 
      label: 'About', 
      path: '/about', 
      icon: <PersonIcon />,
      color: '#607D8B', // Blue Grey
      tooltip: 'Learn more about me',
    },
  ];

  const currentPage = navItems.find(item => item.path === location.pathname) || navItems[0];
  const currentColor = currentPage.color;

  const drawerWidth = isCollapsed ? 80 : 240;

  const handleDrawerToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setThemeMenuAnchor(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setThemeMenuAnchor(null);
  };

  const handleThemeChange = (mode: 'light' | 'dark' | 'system') => {
    setThemeMode(mode);
    handleThemeMenuClose();
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return <LightModeIcon />;
      case 'dark':
        return <DarkModeIcon />;
      case 'system':
        return <SettingsBrightnessIcon />;
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  const getThemeTooltip = () => {
    switch (themeMode) {
      case 'light':
        return 'Light mode (click to change)';
      case 'dark':
        return 'Dark mode (click to change)';
      case 'system':
        return `System mode - ${isDarkMode ? 'Dark' : 'Light'} (click to change)`;
      default:
        return 'Theme settings';
    }
  };

  const actionButtons = [
    {
      icon: <LinkedInIcon />,
      tooltip: 'LinkedIn Profile',
      href: 'https://linkedin.com/in/Erfanh1995',
      color: '#0077B5',
    },
    {
      icon: <GitHubIcon />,
      tooltip: 'GitHub Profile',
      href: 'https://github.com/Erfanh1995',
      color: '#333333',
    },
    {
      icon: <SchoolIcon2 />,
      tooltip: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=IJ96xKgAAAAJ&hl=en',
      color: '#4285F4',
    },
    {
      icon: <DescriptionIcon />,
      tooltip: 'Download Resume',
      href: process.env.PUBLIC_URL + '/Erfan_Resume.pdf',
      color: '#FF9800',
    },
    {
      icon: <DownloadIcon />,
      tooltip: 'Download CV',
      href: process.env.PUBLIC_URL + '/Erfan_CV.pdf',
      color: '#4CAF50',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          transition: 'width 0.2s, margin-left 0.2s, background 0.3s',
          background: `linear-gradient(45deg, ${currentColor} 30%, ${currentColor}99 90%)`,
          color: 'white',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Dark Mode Toggle Button (AppBar, mobile only) */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Tooltip title={getThemeTooltip()}>
              <IconButton
                color="inherit"
                onClick={handleThemeMenuOpen}
                sx={{ 
                  mr: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                {getThemeIcon()}
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={themeMenuAnchor}
              open={Boolean(themeMenuAnchor)}
              onClose={handleThemeMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleThemeChange('light')} selected={themeMode === 'light'}>
                <LightModeIcon sx={{ mr: 1 }} />
                Light
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange('dark')} selected={themeMode === 'dark'}>
                <DarkModeIcon sx={{ mr: 1 }} />
                Dark
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange('system')} selected={themeMode === 'system'}>
                <SettingsBrightnessIcon sx={{ mr: 1 }} />
                System
              </MenuItem>
            </Menu>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Erfan Hosseini
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {actionButtons.map((button, index) => (
              <Tooltip key={index} title={button.tooltip}>
                <IconButton
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  {button.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: '280px',
              background: muiTheme.palette.mode === 'dark' 
                ? 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 100%)'
                : 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
            },
          }}
        >
          <Box sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            background: `linear-gradient(45deg, ${currentColor} 30%, ${currentColor}99 90%)`,
            color: 'white',
            transition: 'background 0.3s',
          }}>
            <Avatar
              src={process.env.PUBLIC_URL + '/site-logo.jpg'}
              alt="Site-logo"
              sx={{ 
                width: 100, 
                height: 100, 
                mb: 2,
                border: '3px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Erfan Hosseini
            </Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: `${item.color}15`,
                      '&:hover': {
                        backgroundColor: `${item.color}25`,
                      },
                    },
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: location.pathname === item.path ? item.color : 'inherit',
                      minWidth: 40,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Tooltip title={item.tooltip} placement="right">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: location.pathname === item.path ? `${item.color}15` : 'transparent',
                          transition: 'all 0.2s',
                          '&:hover': {
                            backgroundColor: `${item.color}25`,
                          },
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      color: location.pathname === item.path ? item.color : 'inherit',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              transition: 'width 0.2s, background 0.3s',
              overflowX: 'hidden',
              background: muiTheme.palette.mode === 'dark' 
                ? 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 100%)'
                : 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
              borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            },
          }}
          open
        >
          {/* Only dark mode button at the very top */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'center', pt: 0, pb: 0 }}>
            <Tooltip title={getThemeTooltip()}>
              <IconButton
                color="inherit"
                onClick={handleThemeMenuOpen}
                sx={{
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  color: muiTheme.palette.mode === 'dark' ? '#FFD600' : '#333',
                  mb: 1.5,
                  mt: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.10)',
                  },
                }}
              >
                {getThemeIcon()}
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={themeMenuAnchor}
              open={Boolean(themeMenuAnchor)}
              onClose={handleThemeMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={() => handleThemeChange('light')} selected={themeMode === 'light'}>
                <LightModeIcon sx={{ mr: 1 }} />
                Light
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange('dark')} selected={themeMode === 'dark'}>
                <DarkModeIcon sx={{ mr: 1 }} />
                Dark
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange('system')} selected={themeMode === 'system'}>
                <SettingsBrightnessIcon sx={{ mr: 1 }} />
                System
              </MenuItem>
            </Menu>
          </Box>
          {/* Original avatar and name location (blue background) */}
          <Box sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            background: `linear-gradient(45deg, ${currentColor} 30%, ${currentColor}99 90%)`,
            color: 'white',
            transition: 'background 0.3s',
          }}>
            <Avatar
              src={process.env.PUBLIC_URL + '/site-logo.jpg'}
              alt="Site-logo"
              sx={{ 
                width: isCollapsed ? 60 : 100, 
                height: isCollapsed ? 60 : 100, 
                mb: 2,
                transition: 'width 0.2s, height 0.2s',
                border: '3px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            />
            {!isCollapsed && (
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Erfan Hosseini
              </Typography>
            )}
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: isCollapsed ? 'center' : 'initial',
                    px: 2.5,
                    '&.Mui-selected': {
                      backgroundColor: `${item.color}15`,
                      '&:hover': {
                        backgroundColor: `${item.color}25`,
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isCollapsed ? 'auto' : 3,
                      justifyContent: 'center',
                      color: location.pathname === item.path ? item.color : 'inherit',
                    }}
                  >
                    <Tooltip title={item.tooltip} placement="right">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: location.pathname === item.path ? `${item.color}15` : 'transparent',
                          transition: 'all 0.2s',
                          '&:hover': {
                            backgroundColor: `${item.color}25`,
                          },
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Tooltip>
                  </ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText 
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        color: location.pathname === item.path ? item.color : 'inherit',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              m: 1,
              color: currentColor,
              '&:hover': {
                backgroundColor: `${currentColor}15`,
              },
            }}
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          transition: 'width 0.2s, margin-left 0.2s',
          background: muiTheme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Container sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>

      <Fab
        color="primary"
        aria-label="contact"
        sx={{ 
          position: 'fixed', 
          bottom: 16, 
          right: 16,
          background: `linear-gradient(45deg, ${currentColor} 30%, ${currentColor}99 90%)`,
          '&:hover': {
            background: `linear-gradient(45deg, ${currentColor}99 30%, ${currentColor} 90%)`,
          },
        }}
        href="mailto:me@erfanhosseini.com"
      >
        <EmailIcon />
      </Fab>
    </Box>
  );
};

export default Layout; 