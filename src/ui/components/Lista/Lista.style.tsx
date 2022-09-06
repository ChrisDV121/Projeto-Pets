import { styled } from "@mui/system";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto; //centralizando
    padding: ${({theme}) => theme.spacing(2)} ; //afastar da borda

`
    
export const ItemLista = styled('li')`
    display: grid; //Grade
    grid-template-columns: repeat(2, 1fr); //Repetir o valor do tamanho das colunas
    gap: 50px; //Espaço entre os elementos
    margin-bottom:  ${({theme}) => theme.spacing(5)}; 
    //breack point 
    ${({theme}) => theme.breakpoints.down('md')}{
    
    grid-template-columns: 1fr; //Repetir o valor do tamanho das colunas
    gap:  ${({theme}) => theme.spacing(2)};
    margin-bottom:  ${({theme}) => theme.spacing(10)};


    }

`
    
export const Foto = styled('img')`
    width: 100%;
    

`
    
export const Informacoes = styled('div')`
    display: flex;
    flex-direction: column;
    gap:  ${({theme}) => theme.spacing(2)};

`
    
export const Nome = styled('h2')`
    margin: 0;

`

export const Descricao = styled('p')`
    margin: 0;
    word-break: breack-word; //Quebra de palavra


`;
