 import React, {useState} from 'react'
 import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
 import {Box} from '@mui/material';
 import { TabContext, TabPanel } from '@material-ui/lab';
 import ListaPostagem from '../listaPostagem/ListaPostagem';
 import './TabPostagem.css';


 function TabPostagem() {
     const [value, setValue] = useState('1')
     function handleChange(e: React.ChangeEvent<{}>, newValue: string){
         setValue(newValue);
     }
   return (
     <>
       <TabContext value={value}>
         <AppBar position="static">
           <Tabs centered style={{color:"white", background: "linear-gradient(to bottom, #184e77 0%, #34a0a4 100%)"}} onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
             <Tab label="Sobre-nós" value="2" /> 
           </Tabs> 
         </AppBar> 
         <TabPanel value="1" >
           <Box display="flex" flexWrap="wrap" justifyContent="center">
             <ListaPostagem />
           </Box>
         </TabPanel>
        <TabPanel value="2">
           <Typography variant="h5" gutterBottom style={{color:"white"}} component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="h6" gutterBottom color="textPrimary" align="justify" style={{fontWeight:"bold"}}>Bem-vindo ao Green Power Hub, a rede social dedicada a promover a energia limpa e renovável. Estamos empenhados em fornecer um espaço interativo onde pessoas que se interessam por soluções sustentáveis podem se conectar, compartilhar informações e impulsionar a transição global para um futuro mais verde.

No Green Power Hub, você encontrará uma comunidade vibrante de indivíduos e organizações comprometidos em explorar, desenvolver e promover fontes de energia limpa. Nosso objetivo é oferecer um ambiente inclusivo para todos, desde entusiastas novatos até especialistas em energia renovável.

Aqui, você poderá compartilhar e encontrar informações atualizadas sobre tecnologias emergentes, projetos inovadores e iniciativas de energia limpa em todo o mundo. Além disso, incentivamos debates construtivos e a troca de conhecimentos para incentivar a colaboração e a criação de soluções inovadoras.

O Green Power Hub é mais do que uma plataforma de compartilhamento de informações; também pretendemos fomentar o networking e a conexão entre aqueles que procuram soluções de energia limpa e renovável e aqueles que fornecem essas soluções. Acreditamos que ao unir pessoas com interesses semelhantes, podemos acelerar o avanço da energia sustentável e torná-la acessível a todos.

Junte-se a nós no Green Power Hub e faça parte de uma comunidade global dedicada a construir um futuro mais limpo e sustentável. Juntos, podemos impulsionar a mudança e tornar a energia limpa uma realidade para todos.</Typography>
         </TabPanel> 
      </TabContext>
    </>
  );
}
export default TabPostagem;