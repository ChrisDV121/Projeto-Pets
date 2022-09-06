import "../ui/styles/globals.css";  //Onde fica as partes fixas da pagina
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import tema from '../ui/themes/tema'
import Cabecalho from "../ui/components/Cabecalho/Cabecalho";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme = {tema} >
      <Cabecalho/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
