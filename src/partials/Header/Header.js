import { useState } from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,

} from '@material-ui/core'

import { Home, PersonAdd, Person } from '@material-ui/icons';


import { useHistory } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';//JSCSS
import useStyles from './Header.style'


const Header = ( ) => {
    const classes = useStyles()
    const history = useHistory()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        history.push(route)
        handleToggleMenu()

    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                    <List>
                            <ListItem button onClick={() => handleMenuClick('/')}>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                            <ListItem button onClick={() => handleMenuClick('/Customers')}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText>Lista de Clientes</ListItemText>
                            </ListItem>
                            <ListItem button onClick={() => handleMenuClick('/Customers/add')}>
                                <ListItemIcon>
                                    <PersonAdd />
                                </ListItemIcon>
                                <ListItemText>Cadastro de Clientes</ListItemText>
                            </ListItem>
                    </List>
            </Drawer>
        </>
    )
}

export default Header