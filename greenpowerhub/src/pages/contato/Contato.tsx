import './Contato.css'
import { Box, Button, Grid, Typography } from "@mui/material";

function Contato() {
return(
    <>
   <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa' >
    <Grid alignItems="center" item xs={6}>
        <Box paddingX={5} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Entre em contato conosco!</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Box marginRight={1}>
                </Box>
                </Box>
                </Grid>
                <Grid item xs={3} >
                    <img src="./images/gph.jpg" alt="" width="627px"/>
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
                </Grid>

    </>
)
}

export default Contato;
