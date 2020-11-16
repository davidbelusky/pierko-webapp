
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import { MenuList } from '@material-ui/core';
import NavBarItem from './NavBarItem'
import NavIcons from './NavIcons'
import { Typography } from '@material-ui/core';
import LogoImage from '../images/logo.jpeg'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"3rem",
  },
  menuList: {
    display: "flex",
    flex:1,
  },
  appBar: {
      backgroundColor: "white",
      alignItems: "center",
      display:'flex'
  },
  tool:{
    justifyContent: "spaceBetween",
    width: "94%",
  },
  logoBox:{
    flex:1
  },
  logo: {
    //backgroundColor: "black",
    backgroundImage: `url(${LogoImage})`,
    width: "4rem",
    height: "4rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position:"relative"
  }

}));

function NavBar() {

    const menuItemsList = [{'name':'Home'}, {'name':'Gallery'}, {'name':'Shop'}, {'name':'About'}, {'name':'Contact'}]

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.tool}>
            <Box className={classes.logoBox}>
              <Box className={classes.logo}>
              </Box>
            </Box>
            <MenuList className={classes.menuList}>
             {menuItemsList.map((item,i) => <NavBarItem menuName={item.name}/>)}
            </MenuList>
            <NavIcons />
            
          </Toolbar>
          
 
        </AppBar>
      </div>
    );
}

export default NavBar;