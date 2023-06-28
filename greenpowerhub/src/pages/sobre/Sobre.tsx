import { useNavigate } from 'react-router-dom';
import './Sobre.css';
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { TokenState } from '../../store/tokens/TokenReducer';

function Sobre() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa1' >
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={3} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo1'>Sobre a GPH</Typography>
                    </Box>

                    <Grid alignItems="center" item xs={2}>  
                    <Box justifyContent="center" display="flex" paddingX={3}>  
                        <img className='foto1' src="./images/energia hidraulica.png" alt="paisagem energia hidraulica" width="450px" height="450px" />
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='texto1'>Bem-vindo ao Green Power Hub, a rede social dedicada a promover a energia limpa e renovável. Estamos empenhados em fornecer um espaço interativo onde pessoas que se interessam por soluções sustentáveis podem se conectar, 
                        compartilhar informações e impulsionar a transição global para um futuro mais verde. No Green Power Hub, você encontrará uma comunidade vibrante de indivíduos e organizações comprometidos em explorar, desenvolver e promover fontes de energia limpa. Nosso objetivo é oferecer um ambiente inclusivo para todos, desde entusiastas novatos até especialistas em energia renovável.
                        Aqui, você poderá compartilhar e encontrar informações atualizadas sobre tecnologias emergentes, projetos inovadores e iniciativas de energia limpa em todo o mundo. Além disso, incentivamos debates construtivos e a troca de conhecimentos para incentivar a colaboração e a criação de soluções inovadoras. O Green Power Hub é mais do que uma plataforma de compartilhamento de informações; 
                        também pretendemos fomentar o networking e a conexão entre aqueles que procuram soluções de energia limpa e renovável e aqueles que fornecem essas soluções. Acreditamos que ao unir pessoas com interesses semelhantes, podemos acelerar o avanço da energia sustentável e torná-la acessível a todos. Junte-se a nós no Green Power Hub e faça parte de uma comunidade global dedicada a construir 
                        um futuro mais limpo e sustentável. Juntos, podemos impulsionar a mudança e tornar a energia limpa uma realidade para todos.</Typography>
                   
                   </Box>
                   </Grid>
                   
                   <Box alignItems="center" >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo2'>Sobre Nós</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic nisi pariatur. Quidem labore, doloribus nobis quibusdam vitae aspernatur dolorem officia praesentium molestias architecto doloremque sunt, ex mollitia ipsam odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore nobis doloremque, in sapiente non sint dolorem architecto fugiat pariatur, a magni voluptas et porro quasi vitae reprehenderit nulla excepturi.</Typography>              
                       
                        <img className="alanys" width="120px" height="120px" src="./images/Alanys.jpg" /> 
                        <img className="alessandra" width="120px" height="120px" src="./images/alessandra.jpg"/>
                        <img className="bruno" width="120px" height="120px" src="./images/Bruno.jpg"/>
                        <img className="luiz" width="120px" height="120px" src="./images/Luiz.jpg"/>
                        <img className="ricardo" width="120px" height="120px" src="./images/Ricardo.jpg"/>
                        <img className="thayna" width="120px" height="120px" src="./images/Thayna.jpg"/>

                    </Box>
                </Grid >
            </Grid>

        </>
    )

}
export default Sobre;