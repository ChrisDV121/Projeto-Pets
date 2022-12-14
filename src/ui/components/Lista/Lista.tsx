import { Button } from "@mui/material";
import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Descricao,
} from "./Lista.style";
import { Pet } from "../../../data/@types/Pet";
import {TextService} from '../../../data/@types/services/TextService'; //serviço para tamanho maximo de texto
interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) =>void;
}

export default function Lista(props: ListaProps) {
    const tamanhoMaximoTexto = 200; //Valor do serviço
  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} alt={pet.nome}/>
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
                {TextService.limitarTexto(pet.historia,tamanhoMaximoTexto)}
              {pet.historia}
            </Descricao>
            <Button variant="contained" fullWidth onClick={()=> props.onSelect(pet)}>
              Adotar {pet.nome}
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
