import './Contato.css'
import { Box, Button, Grid, Typography, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";
import "./Contato.css"


function Contato() {

    const [enviado, setEnviado] = useState(false);

    const handleEnviar = () => {
        // Lógica para enviar a mensagem

        // Define o estado de enviado para true
        setEnviado(true);
    };

    const handleFecharSnackbar = () => {
        // Define o estado de enviado para false para fechar o Snackbar
        setEnviado(false);
    };

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='text_form' >
                <Grid sm={6}>
                    <Box marginLeft="80px" marginTop="90px" alignItems="center" className='fundoCtt' marginRight="30px" textAlign="center">

                        <Typography variant='h3' fontWeight="bold" style={{ color: "white" }} >Informações de contato</Typography>
                        <Box my={2}></Box>
                        <Typography variant='h5' style={{ color: "white" }} >Telefone: (11) 2052-2089</Typography>
                        <Box my={1}></Box>
                        <Typography variant='h5' style={{ color: "white" }} >Email: greenpowerhub1@gmail.com</Typography>
                        <Box my={1}></Box>
                        <Typography variant='h5' style={{ color: "white" }} >Endereço: São Paulo - SP</Typography>
                        <Box my={6}></Box>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39578113315!2d-46.924970224858164!3d-23.68143454784927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1688404953435!5m2!1spt-BR!2sbr"
                            width="500"
                            height="330"
                            loading="lazy"
                        ></iframe>


                    </Box>
                </Grid>
                <Grid sm={6} >
                    <Box marginLeft="90px" marginTop="90px" alignItems="center" className='fundoCtt' marginRight="60px" textAlign="center" height="565px"  >

                        <Typography variant='h3' fontWeight="bold" style={{ color: "white" }}>Entre em contato</Typography>
                        <main className="contato">
                            <form className="formulario" >
                                <TextField
                                    className="texto_form"
                                    id="nome"
                                    type="text"
                                    label="Nome"
                                    placeholder="Insira o seu nome completo..."
                                    fullWidth


                                />

                                <Box my={1} >
                                    <TextField
                                        className="texto_form"
                                        id="email"
                                        type="text"
                                        label="Email"
                                        placeholder="Insira o seu email completo..."
                                        fullWidth
                                    />
                                </Box>
                                <Box my={1}>
                                    <TextField
                                        className="texto_form"
                                        id="assunto"
                                        type="text"
                                        label="Assunto"
                                        placeholder="Insira o assunto da mensagem..."
                                        fullWidth

                                    />
                                </Box>
                                <Box my={1}>
                                    <TextField
                                        className="texto_form"
                                        id="mensagem"
                                        label="Mensagem"
                                        multiline
                                        rows={8}
                                        placeholder="Insira a sua mensagem..."
                                        fullWidth
                                    />
                                </Box>
                                <Box textAlign='center' my={2}>
                                    <Button variant='contained' style={{backgroundColor:" #184e77ff",color:"white"}} type='submit' onClick={handleEnviar}>Enviar</Button>
                                </Box>
                            </form>
                        </main>
                    </Box>
                </Grid>

            </Grid>
            <Snackbar
                open={enviado}
                autoHideDuration={3000}
                onClose={handleFecharSnackbar}
                message="Mensagem enviada com sucesso!"

            />
        </>
    )
}

export default Contato;
