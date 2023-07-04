import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography, Grid, IconButton, } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReducer';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
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

  async function getPost() {
    await busca('/postagens', setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} style={{paddingTop:"55px"}} >
            <Card variant="outlined" className="corPosts" >
              <CardContent >
                <Typography color="textSecondary" style={{fontWeight:"bold"}} gutterBottom >
                  Postagens
                </Typography>
                <Typography variant="h5" style={{fontWeight:"bold"}} component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" style={{fontWeight:"bold"}} component="p">
                  {post.postagem}
                </Typography>
                {/* <Typography variant="body2" component="p">
                  {post.data}
                </Typography> */}
                <Typography variant="body2" style={{fontWeight:"bold"}} component="p">
                  {post.comentario}
                </Typography>
                <Typography variant="body2" style={{fontWeight:"bold"}} component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1} color="primary">
                        <Fab color="primary" >
                          <EditIcon />
                        </Fab> 
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size="small" style={{borderRadius:"50%",backgroundColor: "rgb(220, 235, 235)" }} >
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
  )
}

export default ListaPostagem;