import { TabsListUnstyled } from "@mui/base";
import { TituloStyled,Subtitulo } from "./Titulo.style";

interface Tituloprops{
    titulo: String;
    subtitulo?: String | JSX.Element;
}

export default function Titulo (props:Tituloprops){
    return (
        <>
        <TituloStyled>{props.titulo}</TituloStyled>
        <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}

