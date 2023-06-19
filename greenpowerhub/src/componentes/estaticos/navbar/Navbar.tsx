import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>

            <AppBar position="static" style={{ backgroundColor: '#22577aff' }}>
                <Toolbar variant="dense" >
                    <Box display="flex" justifyContent= "flex-end">
                        <Box className='cursor' >
                            <Typography variant="h5" color="inherit">
                                Green Power hub
                            </Typography>
                        </Box>

                        <Box display="flex" >
                        <Link to='/home' className='cursor'>
                            <Box mx={3} style={{ cursor: "pointer", color: 'white' }} >
                                <Typography variant="h6" color="inherit" >
                                    Home
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/postagens' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/sobre' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/contato' className='cursor'>
                            <Box mx={2} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>
                            </Link>

                            <Link to='/login' className='cursor'>
                                <Box mx={2} style={{ cursor: "pointer", color: 'white' }} >
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
