import { useNavigate } from 'react-router-dom';
import './Sobre.css';
import {Grid} from "@material-ui/core"
import { Box, Typography} from "@mui/material";
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
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])
    

    return (
        <>
        <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='titulo'>
            <Grid alignItems="center" item md={6}>
                <Box>
                    <Typography variant="h2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard2'>Sobre GPH</Typography>
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='devscard2' >Somos uma organização que tem o compromisso de oferecer alternativas inteligentes para atender às necessidades de nossos clientes e do planeta.
                        Nos dedicamos a encontrar soluções inovadoras e eficientes, que ajudem a impactar positivamente o mundo e melhorar a vida das pessoas.
                        Os nossos valores são guiados pela ética, qualidade e respeito ao meio ambiente.
                    </Typography>
                </Box>
            </Grid>

            <Grid item md={6}>
                <Box  paddingX={5} textAlign={'center'}>
                    <img src="./images/mundoVerde.jpg" className="imagemCentral" width="400px" height="400px"/>
                </Box>
            </Grid>
        </Grid>
        <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='cardmissao' >
            <Grid item md={6}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/lampada.webp" className="imagemCentral" width="400px" height="400px" />
                </Box>
            </Grid>
            <Grid alignItems="center" item md={6}>
                <Box>
                    <Typography variant="h2" gutterBottom color="textPrimary" component="h3" align="center" className='titulomissao'>Nossa Missão</Typography>
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulomissao'>Bem-vindo ao Green Power Hub, a rede social dedicada à energia limpa e renovável. Conecte-se, compartilhe informações e promova soluções sustentáveis. Junte-se a uma comunidade global empenhada em acelerar a transição para um futuro mais verde. Faça networking, encontre soluções e impulsione a mudança. Juntos, construiremos um mundo movido por energia limpa.</Typography>
                </Box>
            </Grid>
        </Grid>

        <Grid md={12} container direction="row" justifyContent="center" alignItems="center" className='titulo'>
            <Grid alignItems="center" item md={6}>
                <Box>
                    <Typography variant="h2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard2' >Sobre o Projeto</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" component="h5" align="center" className='devscard2' >Durante o Bootcamp Desenvolvedor Java Junior Full Stack turma 64 em parceria com a BEES, desenvolvemos este projeto de conclusão. Nossa rede social se baseou na Agenda 2030 da ONU, com foco em Sustentabilidade. Para a construção, utitlizamos tecnologias: Java, Spring Boot, MySql, React, TypeScript, HTML e CSS. </Typography>
                </Box>
            </Grid>
            <Grid item md={6}>
                <Box paddingX={5} textAlign={'center'}>
                <img src="./images/energia_eletrica.jpg" className="imagemCentral" width="400px" height="400px" />
                </Box>
            </Grid>
        </Grid>

        {/* GRID DESENVOLVEDOR */}

        <Grid container spacing={2} className='cardtech'>
            <Grid item md={12} direction="row" justifyContent="center" alignItems="center">
                <Box paddingX={15}>
                    <Typography variant="h2"component="h3" align="center" className=''>Conheça a Equipe</Typography>
                </Box>
            </Grid>

            <Grid item md={3}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/Bruno.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer"/>
                    <Typography variant="h6" gutterBottom component="h3" align="center" className="nomeDev">Bruno Ferreira</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1"> </Typography>

                    <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                        <a href="https://www.linkedin.com/in/bruno-ferreira-500604240/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/brunoo-lcf" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                    </Box>
                </Box>
            </Grid>

            <Grid item md={3}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/alessandra.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer"/>
                    <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Alessandra Mariana</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Me formei em Comunicação Social e fiz do Bootcamp de Pessoa Desenvolvedora minha escola. Acredito que a combinação de Programação e Comunicação resultam excelentes projetos quando presentes em uma equipe.</Typography>

                    <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                        <a href="https://www.linkedin.com/in/alessandramariana/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/AlessandraMariana" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                    </Box>
                </Box>
            </Grid>

            <Grid item md={3}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/Luiz.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer"/>
                    <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Luiz Fernando</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Como Desenvolvedora, estou aprimorando minhas habilidades para desenvolver soluções eficazes. Determinada e apaixonada por Programação, meu objetivo é me tornar uma excelente Desenvolvedora.</Typography>

                    <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                        <a href="https://www.linkedin.com/in/luiz-fernando-benedito-rodrigues-371709149/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/luferbero" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                    </Box>
                </Box>
            </Grid>

            <Grid item md={3}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/Thayna.jpg" className="fotosDev" width="120px" height="120px" referrerPolicy="no-referrer"/>
                    <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center" >Thayna de A.</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard' id="devsFila1">Formada em Administração de Empresas. Atualmente curso Análise e Desenvolvimento de Programas. Sempre enxerguei a tecnologia como uma ferramenta poderosa para otimizar o trabalho e facilitar a vida das pessoas.</Typography>

                    <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                        <a href="https://www.linkedin.com/in/giselle-de-souza-gabriel/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/Thayna-AS" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
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
                    <img src="./images/Ricardo.jpg" className="fotosDev" width="120px" height="120px"  referrerPolicy="no-referrer" />
                    <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center" >Ricardo Marinho</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Técnico em Arquivologia, atualmente estudo Análise e Desenvolvimento de Sistemas. Apaixonado por Programação, busco melhorar minhas habilidades e conhecimentos, focando em soluções que causem um impacto positivo.</Typography>

                    <Box display="flex" alignItems="center" justifyContent="center" color='primary' className="cardicons">
                        <a href="https://www.linkedin.com/in/moreira-joao-vitor/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/ricocezar" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                    </Box>
                </Box>
            </Grid>

            <Grid item md={4}>
                <Box paddingX={5} textAlign={'center'}>
                    <img src="./images/Alanis.jpg" className="fotosDev" width="120px" height="120px"  referrerPolicy="no-referrer"/>
                    <Typography variant="h6" className="nomeDev" gutterBottom component="h3" align="center">Alanis Mayra</Typography>
                    <Typography variant="body1" gutterBottom component="h3" align="center" className="subtituloSobre">Dev Full Stack</Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="h3" align="center" className='devscard'>Enquanto estudante de Análise e Desenvolvimento de Sistemas, vejo a possibilidade de mudanças com a ajuda da tecnologia, criatividade, persistência e trabalho em equipe. Me mover pelo novo é a minha paixão.</Typography>

                    <Box display="flex" alignItems="center"  width="120px" height="120px" className="fotosDev">
                        <a href="https://www.linkedin.com/in/alanis-mayra/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                        <a href="https://github.com/alanismayra" target="_blank">
                            <GitHubIcon style={{ fontSize: 40, margin: 5 }} />
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    </>
    )

}
export default Sobre;