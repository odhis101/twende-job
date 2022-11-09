import React from 'react'
import './BottomNav.scss'
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Person3Icon from '@mui/icons-material/Person3';
import WorkIcon from '@mui/icons-material/Work';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AddAlertIcon from '@mui/icons-material/AddAlert';
export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
  return (
   <div className='BottomNavContainer'>
       <Box sx={{ width: 500 }}>
<BottomNavigation
showLabels
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
>
  <BottomNavigationAction component={Link}  to="/"  label="Find a Job" icon={<FindInPageIcon />} />
  <BottomNavigationAction component={Link}  to="/postAjob"  label="Post a Job " icon={<WorkIcon />} />
  <BottomNavigationAction label="Job Alert" component={Link}  to="/JobAlerts" icon={<AddAlertIcon />} />
  <BottomNavigationAction onClick={toggleDrawer('right', true)} label="account" icon={<Person3Icon />} />
  <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
 
</BottomNavigation>
</Box>
   </div>
  )
}
