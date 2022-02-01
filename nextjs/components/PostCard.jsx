import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import {
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from "react-share";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Snackbar from '@mui/material/Snackbar';
import { Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export default function PostCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openSnack,setOpenSnack] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCopy  = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title={props.title}
        subheader={props.time.replace('-', '/').split('T')[0].replace('-', '/')}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon onClick={handleClick } />
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <WhatsappShareButton
            url={`http://localhost:3000/posts/${props.slug}`}
          >
            <WhatsAppIcon/>
          </WhatsappShareButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <FacebookMessengerShareButton
            url={`http://localhost:3000/posts/${props.slug}`}
          >
            <FacebookIcon/> 
          </FacebookMessengerShareButton>
          </MenuItem>
          <MenuItem onClick={handleClose}><CopyToClipboard text={`http://localhost:3000/posts/${props.slug}`} onCopy={handleCopy}><ContentCopyIcon/></CopyToClipboard></MenuItem>
          
      </Menu>
        <Link href={`http://localhost:3000/posts/${props.slug}`}>
        <Button variant="text">
          Read more
        </Button>
        </Link>
      </CardActions>
      
    </Card>
    <Snackbar
          open={openSnack}
          onClose={handleCloseSnack}
          message="Link Copied"
        />
    </>
  );
}