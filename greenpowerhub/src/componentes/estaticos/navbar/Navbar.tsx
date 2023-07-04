import { AppBar, Toolbar, Typography, Box, Avatar, SvgIcon } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReducer';
import { addToken } from '../../../store/tokens/Action';
import {toast} from 'react-toastify';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import imgLogo from '../../../assets/images/logoGPH1.png';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =
            <AppBar position="fixed" className='appbar'>
                <Toolbar variant="dense" style={{ height: '100%' }}>
                    <Box display="flex" justifyContent="space-between" alignItems='center' height='100%'>
                            <Link to='/home' className='cursor'>
                                <Box mx={3} style={{ cursor: "pointer" }} >
                                    <Typography variant="h3" color="inherit" >
                                         <img src={imgLogo} alt="logo" referrerPolicy="no-referrer" height='60px' />
                                    </Typography>
                                </Box>
                            </Link>

                        <Box display="flex" >
                            <Link to='/posts' className='cursor'>
                                <Box mx={2} style={{ cursor: "pointer", }}>
                                    <Typography variant="h5" color="inherit">
                                        Postagens
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/temas" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" color="inherit">
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/formularioTema" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" color="inherit">
                                        Cadastrar Tema
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre' className='cursor'>
                                <Box mx={2} style={{ cursor: "pointer" }}>
                                    <Typography variant="h5" color="inherit">
                                        Sobre
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/contato' className='cursor'>
                                <Box mx={2} style={{ cursor: "pointer" }}>
                                    <Typography variant="h5" color="inherit">
                                        Contato
                                    </Typography>
                                </Box>
                            </Link>

                            <Box mx={2} style={{ cursor: "pointer" }} onClick={goLogout} className="logout" >
                                <Typography variant="h5" color="inherit">
                                <SvgIcon component={ExitToAppIcon} viewBox="lightgrey"/>
                                </Typography>
                            </Box>



                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
