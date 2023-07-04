import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from '../../componentes/carousel/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { TokenState } from '../../store/tokens/TokenReducer';
import { toast } from 'react-toastify';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
    );// acessa o store, pega o token e atribui a const token

    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
          navigate("/login")
  
      }
  }, [token])

    return (
        <>

            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa1' >

                <Box display={{ xs: 'none', md: 'block' }}>
                    <Carousel />
                </Box>
                <Grid xs={12} className="postagens">
                </Grid>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={12} className="textoInfo">
                        <Typography variant="h5" gutterBottom align="center" className='titulo1'>Bem-vindo ao Green Power Hub, a rede social dedicada à energia limpa e renovável. Conecte-se, compartilhe informações e promova soluções sustentáveis. Junte-se a uma comunidade global empenhada em acelerar a transição para um futuro mais verde. Faça networking, encontre soluções e impulsione a mudança. Juntos, construiremos um mundo movido por energia limpa.</Typography>
                    </Box>
                    <Box display='flex' justifyContent= 'space-evenly'>
                        <Box marginRight={1}>
                        <ModalPostagem/>
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid> 
            </Grid>

        </>
    )
}

export default Home;