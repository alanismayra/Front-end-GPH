import { Box, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/Github";
import './Footer.css'

function Footer() {     

    return (
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>

                <Box className='backFooter' marginTop='0px'><hr></hr>

                
                        <Box display="flex" alignItems="center" justifyContent="center" >
                        <a href="https://www.instagram.com/greenpowerhub23/" target="_blank" className="redes" >
                            <InstagramIcon style={{ padding: '0px', fontSize: '50px' }} />
                        </a>
                        <a href="https://github.com/orgs/Projeto-Integrador-Generation/repositories" target="_blank" className="redes">
                            <GitHubIcon style={{ fontSize: '50px' }}/>
                        </a>
                    </Box>
                    <Box className="box2">
                        <a target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom align="center" className="texto a:link" >brasil.generation.org</Typography>
                        </a>
                        <a>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2023 - Direitos reservados ao Green Power Hub</Typography>
                        </a>
                    </Box>
                </Box>

            </Grid>
        </Grid> 
        
        </>
    )
}
export default Footer;