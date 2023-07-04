import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Fab, IconButton } from '@material-ui/core';
import {Box} from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReducer';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
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


  async function getTema(){
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2}  style={{paddingTop:"55px"}} >
        <Card variant="outlined" className="corTemas" >
          <CardContent>
            <Typography color="textSecondary" style={{fontWeight:"bold"}} gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" style={{fontWeight:"bold"}} component="h2">
             {tema.nome}
            </Typography>
            <Typography variant="h5" style={{fontWeight:"bold"}} component="h2">
             {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>                
                  <Fab color="primary" >
                          <EditIcon />
                        </Fab>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" style={{borderRadius:"50%",backgroundColor: "rgb(220, 235, 235)" }}>
                  <IconButton aria-label="delete" >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;