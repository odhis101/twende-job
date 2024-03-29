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
import { useSelector, useDispatch } from 'react-redux'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';


import InfoIcon from '@mui/icons-material/Info';
import { logout,reset } from "../../features/auth/authSlice";
export default function BottomNav() {
  const { user} = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const onLogout =() => {
    dispatch(logout());
    dispatch(reset());

  }
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
      var number  ='';
      user ? number = 'user': number = 'Login'
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
           <List>
              <ListItem key={"Inboxs"} disablePadding>
                <ListItemButton
                 component={Link}
                 to = '/login'>
                  <ListItemIcon>
                  <Person3Icon /> 
                  </ListItemIcon>
                  <ListItemText primary={number} />
                </ListItemButton>
                
              </ListItem>
              
            
          </List>
          <Divider />
    

          <List>
  <ListItemButton component={Link} to='/Subscriptions'>
    <ListItemIcon>
      <LocalOfferIcon />
    </ListItemIcon>
    <ListItemText primary={"Subscriptions"} />
  </ListItemButton>
</List>

<List>
  <ListItemButton component={Link} to='/JobAlerts'>
    <ListItemIcon>
      <DescriptionIcon />
    </ListItemIcon>
    <ListItemText primary={"Subscription Plan"} />
  </ListItemButton>
</List>

<List>
  <ListItemButton component={Link} to='/TermsOfService'>
    <ListItemIcon>
    <AssignmentIcon />
    </ListItemIcon>
    <ListItemText primary={"Terms Of Service"} />
  </ListItemButton>
</List>

<List>
  <ListItemButton component={Link} to='/aboutUs'>
    <ListItemIcon>
      <InfoIcon />
    </ListItemIcon>
    <ListItemText primary={"about us"} />
  </ListItemButton>
</List>
          <Divider />
         { user != null ? <List>
          <ListItemButton
                 onClick={onLogout} >
                  <ListItemIcon>
                  <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>

        
          </List>: null}
         
          
          
      
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
  <BottomNavigationAction component={Link}  to="/"  label="Find a Job " icon={<WorkIcon />} />
  <BottomNavigationAction component={Link}  to="/postAjob"  label="Post a Job " icon={<WorkIcon />} />
  <BottomNavigationAction label="Skills" component={Link}  to="/getSkills" icon={<AddAlertIcon />} />

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
