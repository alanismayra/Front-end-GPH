import './Sobre.css';
import { Box, Grid, Typography } from "@mui/material";

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa1' >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={3} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo1'>Seja bem vindo(a)!</Typography>
                    </Box>
                    <Box paddingX={3}>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo1'>Bem-vindo(a) ao Green Power Hub nossa rede social de energia limpa e renovável. Nossa missão é educar, inspirar e capacitar indivíduos a adotarem uma abordagem sustentável em relação à energia. Valorizamos a transparência, confiabilidade e diversidade, promovendo informações precisas e incentivando a colaboração. Junte-se a nós rumo a um futuro mais limpo e sustentável. Green Power Hub - Energia Limpa e Renovável para Todos.</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="./images/logo-navbar.png" alt="" width="644px" height="680" />
                </Grid>
            </Grid>

        </>
    )

}
export default Sobre;