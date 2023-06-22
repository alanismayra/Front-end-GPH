import useLocalStorage from 'react-use-localstorage';
import './Login.css';
import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');// faz o controle do token dentro do localStorage

    const [userLogin, setUserLogin] = useState<UserLogin>( //userLogin é acessar informaçoes do state e o setUserLogin é para alterar
        {
            id:0,
            usuario: "",
            senha: '',
            token: ''
            //são os valores iniciais do state
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) { //atualiza a model com o valor que o usuário digitar no campo de imput

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })//... espalha todos os atributos que tem dentro de userLogin para dentro da função setUserLogin
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //faz o envio das informaçoes da autenticação do usuário
        e.preventDefault();
        try {
           await login(`/usuarios/logar`, userLogin,setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');

        } //uma tentativa de execução caso não dê certo, retorna um erro.

    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align="center" className="textos">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label='usuario' variant='outlined' name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label='senha' variant='outlined' name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{ borderColor: "lightgrey", backgroundColor: "#22577a", color: "lightgrey" }}>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastroUsuario">
                        <Typography variant='subtitle1' gutterBottom align="center" className="textos">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">


            </Grid>
        </Grid>
    )
}

export default Login;