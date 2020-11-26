import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu,Home, Image, ShoppingCart, Info, Mail } from '@material-ui/icons';
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  list: {

  },
  listItems:{
    paddingLeft:"2rem",
    paddingTop:"1rem"

  },
  menuIcon:{
    color:"black",
    cursor:"pointer"
  },
  mobileMenuDivider:{
    marginTop:"1rem"
  }
});

export default function MobileNavBar() {
  const classes = useStyles();
  const [menuToggle, setMenuToggle] = React.useState(false);
  const itemList = [{"text":"Home","icon":Home,"link":"/"},
                    {"text":"Gallery","icon":Image,"link":"/gallery"},{"text":"Shop","icon":ShoppingCart,"link":"/shop"},
                    {"text":"About","icon":Info,"link":"/about"},{"text":"Contact","icon":Mail,"link":"/contact"}]

  const lst =['Home', 'Gallery', 'Shop', 'About','Contact']

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuToggle(currentmenuToggle => !currentmenuToggle);
  };

  const list = () => (
    <div
      className={classes.list}
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <div className={classes.listItems}>
        <h1>Menu</h1>
        <Divider className={classes.mobileMenuDivider}/>
        <List>
          {itemList.map((item, index) => (
            <ListItem button component={Link} to={item.link}>
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Menu onClick={toggleDrawer()} fontSize="large" className={classes.menuIcon}/>
          <Drawer anchor='top' open={menuToggle} onClose={toggleDrawer(false)}>
            {list('toggle')}
          </Drawer>
        </React.Fragment>
      ))
    </div>
  );
}