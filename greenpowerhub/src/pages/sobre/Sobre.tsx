import { useNavigate } from 'react-router-dom';
import './Sobre.css';
import { toast } from 'react-toastify';
import { Grid } from "@material-ui/core";

import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { TokenState } from '../../store/tokens/TokenReducer';


import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Sobre() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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
            <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='titulo'  style={{paddingTop:"55px"}}>
                <Grid alignItems="center" item md={6}>
                    <Box>
                        <Typography variant="h2" gutterBottom color="white" component="h3" align="center" className='devscard1'>Sobre GPH</Typography>
                        <Typography variant="h6" gutterBottom color="white" component="h5" align="center" className='devscard1' >Somos uma organização que tem o compromisso de oferecer alternativas inteligentes para atender às necessidades de nossos clientes e do planeta.
                            Nos dedicamos a encontrar soluções inovadoras e eficientes, que ajudem a impactar positivamente o mundo e melhorar a vida das pessoas.
                            Os nossos valores são guiados pela ética, qualidade e respeito ao meio ambiente.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item md={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/solo.png" className="imagemCentral" width="350px" height="350px" />
                    </Box>
                </Grid>
            </Grid>
            <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='cardmissao' >
                <Grid item md={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/sol.png" className="imagemCentral" width="300px" height="300px" />
                    </Box>
                </Grid>
                <Grid alignItems="center" item md={6}>
                    <Box>
                        <Typography variant="h2" gutterBottom color="white" component="h3" align="center" className='titulomissao'>Nossa Missão</Typography>
                        <Typography variant="h6" gutterBottom color="white" component="h5" align="center" className='titulomissao'>Bem-vindo ao Green Power Hub, a rede social dedicada à energia limpa e renovável. Conecte-se, compartilhe informações e promova soluções sustentáveis. Junte-se a uma comunidade global empenhada em acelerar a transição para um futuro mais verde. Faça networking, encontre soluções e impulsione a mudança. Juntos, construiremos um mundo movido por energia limpa.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='cardprojeto'>
                <Grid alignItems="center" item md={6}>
                    <Box>
                        <Typography variant="h2" gutterBottom color="white" component="h3" align="center" className='devscard2' >Sobre o Projeto</Typography>
                        <Typography variant="body1" gutterBottom color="white" component="h5" align="center" className='devscard2' >Durante o Bootcamp Desenvolvedor Java Junior Full Stack turma 64 em parceria com a BEES, desenvolvemos este projeto de conclusão. Nossa rede social se baseou na Agenda 2030 da ONU, com foco em Sustentabilidade. Para a construção, utitlizamos tecnologias: Java, Spring Boot, MySql, React, TypeScript, HTML e CSS. </Typography>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/coracao.png" className="imagemCentral" width="280px" height="280px" />
                    </Box>
                </Grid>
            </Grid>

            {/* GRID DESENVOLVEDOR */}

            <Grid container spacing={2} className='cardtech'>
                <Grid item md={12} direction="row" justifyContent="center" alignItems="center">
                    <Box paddingX={15}>
                        <Typography variant="h2" component="h3" align="center" className='' color='white'>Desenvolvedores</Typography>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/Bruno.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" gutterBottom color="white" align="center" className="nomeDev">Bruno Ferreira</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" component="h3" align="center" className='devscard' id="devsFila1">Recém formado na Generation Brasil como desenvolvedor JAVA Fullstack. Convido você para conhecer um pouco mais do meu trabalho de formação e minha trajetória profissional.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/bruno-ferreira-500604240/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/brunoo-lcf" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/alessandra.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom color="white" align="center">Alessandra Mariana</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" align="center" className='devscard' id="devsFila1">Graduanda em Sistemas de Informação, recém formada na Generation e em Análise e Desenvolvimento de Sistemas. Acesse minhas redes para conhecer meu trabalho e trajetória profissional.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/alessandramariana/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/AlessandraMariana" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/Luiz.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom color="white" align="center">Luiz Rodrigues</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" align="center" className='devscard' id="devsFila1">Estudando Análise e Desenvolvimento de Sistemas, formado pela Generation Brasil, com experiência em empresas de grande porte. Habilidade em utilizar softwares e ferramentas como pacote office, sistemas hospitalares e de gestão.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/luiz-fernando-benedito-rodrigues-371709149/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/luferbero" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/Thayna.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom color="white" align="center" >Thayna de A.</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" align="center" className='devscard' id="devsFila1">Realizando formação em Banco de dados e Jogos digitais e recém formada na Generation. Convido você a explorar meu trabalho e conhecer um pouco mais sobre minha trajetória profissional. </Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="https://www.linkedin.com/in/thayna-de-almeida/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/Thayna-AS" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/Ricardo.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom color="white" align="center" >Ricardo Marinho</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" align="center" className='devscard'>Desenvolvedor Java full stack formado pela Generation. Convido você a conhecer um pouco mais o meu trabalho. </Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/rcmgodoy/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/ricocezar" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <Box paddingX={5} textAlign={'center'}>
                        <img src="./images/Alanis.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer" />
                        <Typography variant="h6" className="nomeDev" gutterBottom color="white" align="center">Alanis Mayra</Typography>
                        <Typography variant="body1" gutterBottom color="white" align="center" className="subtituloSobre" >Dev Full Stack</Typography>
                        <Typography variant="body2" gutterBottom color="white" align="center" className='devscard'>Formada pela Generation Brasil, venha explorar meus projetos e conhecer um pouco mais sobre minha trajetória profissional.</Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/alanis-mayra/" target="_blank">
                                <LinkedInIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                            <a href="https://github.com/alanismayra" target="_blank">
                                <GitHubIcon style={{ color: 'white', fontSize: 40, margin: 5 }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box paddingX={12} textAlign={'center'}>
                        <Typography variant='h4' align="center" color={'white'} > Siga nossas redes e acompanhe nosso trabalho!</Typography>
                    </Box>
                </Grid>

            </Grid>

        </>
    )

}
export default Sobre;