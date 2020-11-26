
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import { MenuList } from '@material-ui/core';
import NavBarItem from './NavBarItem'
import NavIcons from './NavIcons'
import LogoImage from '../../images/logo.jpeg'
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNavBar from './MobileNavBar'


const useStyles = makeStyles((theme) => ({
  root: {
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
    flex:1,
    '@media (max-width: 860px)': {
      flex: 0,
      marginRight:"1rem"
    }
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

    const menuItemsList = [{'name':'Home',"link":"/"}, {'name':'Gallery',"link":"/gallery"}, {'name':'Shop',"link":"/shop"}, {'name':'About',"link":"/about"}
    , {'name':'Contact',"link":"/contact"}]
    const hideBasicMenu = useMediaQuery('(min-width:860px)');


    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.tool}>
            <Box className={classes.logoBox}>
              <Box className={classes.logo}>
              </Box>
            </Box>
            { hideBasicMenu ?
            <MenuList className={classes.menuList}>
             {menuItemsList.map((item,i) => <NavBarItem menuName={item.name} menuLink = {item.link}/>)}
            </MenuList>
            : <MobileNavBar/>
            }
            <NavIcons />
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar;