import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1,2),
    width: '20vw',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MyAppBar() {
  const [open,setOpen] = React.useState(false);
  const router = useRouter()
  const onHandleClick = ()=>{
     setOpen(true);
   } 

   const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      router.push(`/search?q=${event.target.value}`);
    }
  }

   const list = () => (
    <Box
      sx={{ width:  310}}
      role="presentation"
    > 
      <Box>
        <Avatar alt="Remy Sharp" src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"  sx={{ width: 156, height: 156 }}/>
        <Typography variant="h6">Rubs Tech Blog</Typography>
        <Typography variant="h9">I'm a develiper from Mexico</Typography>
      </Box>
      <Divider />
      <List>
      <Link href='/'>
      <ListItem button key={1}>
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={'Inicio Blog'} />
        </ListItem>
        </Link>
        <Link href='https://rubsdeveloper.xyz/'>
        <ListItem button key={1}>
              <ListItemIcon>
                <WebIcon></WebIcon>
              </ListItemIcon>
              <ListItemText primary={'rubsdeveloper.xyz'} />
        </ListItem>
        </Link>
        <Link href='https://www.youtube.com/watch?v=6cf2XPZ3U3w&list=RDMMgW165h1-AZE&index=10'>
        <ListItem button key={2}>
          <ListItemIcon>
            <YouTubeIcon/>
          </ListItemIcon>
          <ListItemText primary={'rubsdeveloper'} />
        </ListItem>
        </Link>
        <Link href='https://www.youtube.com/watch?v=6cf2XPZ3U3w&list=RDMMgW165h1-AZE&index=10'>
        <ListItem button key={3}>
          <ListItemIcon>
            <InstagramIcon/>
            </ListItemIcon>
            <ListItemText primary={'rubsdeveloper'} />
        </ListItem>
        </Link>
        <Link href='https://www.youtube.com/watch?v=6cf2XPZ3U3w&list=RDMMgW165h1-AZE&index=10'>
        <ListItem button key={4}>
          <ListItemIcon>
            <FacebookIcon/>
          </ListItemIcon>
          <ListItemText primary={'rubsdeveloper'} />
        </ListItem>
        </Link>
        <Link href='https://www.youtube.com/watch?v=6cf2XPZ3U3w&list=RDMMgW165h1-AZE&index=10'>
        <ListItem button key={5}>
          <ListItemIcon>
            <EmailIcon/>
          </ListItemIcon>
          <ListItemText primary={'rubenvelazquez244@gmail.com'} />
        </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1,position: 'fixed',top: 0 ,zIndex:10, width:'100%'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={onHandleClick}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'}
            open={open}
            onClose={()=>{setOpen(false)}}>
            {list()}
          </Drawer>
          <Link href='/'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },cursor:'pointer' }}
          >
            Rubs Tech Blog
          </Typography>
          </Link>
          {/* 
          <Search onKeyPress={(e) => e.key === 'Enter' && handleKeyPress(e)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


