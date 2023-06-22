import { AppBar, Toolbar, Typography, Box, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>

            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" >
                    <Box display="flex" justifyContent= "flex-end">
                        <Box className='logo' >
                            <Typography variant="h5" color="inherit">
                            <img src='https://i.imgur.com/7nCVJk1.png?2' alt="logo" referrerPolicy="no-referrer"/>
                            </Typography>
                        </Box>

                        <Box display="flex" >
                        <Link to='/home' className='cursor'>
                            <Box mx={3} style={{ cursor: "pointer"}} >
                                <Typography variant="h6" color="inherit" >
                                    Home
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/postagens' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer",}}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/sobre' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/contato' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>
                            </Link>

                            <Link to='/login' className='cursor'>
                                <Box mx={2} style={{ cursor: "pointer"}} >
                                    <Typography variant="h6" color="inherit">
                                        Logout
                                    </Typography>
                                </Box>
                            </Link>

                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>


        </>
    )
}

export default Navbar;
