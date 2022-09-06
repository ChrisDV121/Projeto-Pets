import { CabecalhConteiner,Logo } from "./Cabecalho.style";


export default function Cabecalho (){
    return(
        <CabecalhConteiner>
            <Logo/>
            <img src="/imagens/logo.svg" alt="Adote um PET"/>
        </CabecalhConteiner>
    )
}