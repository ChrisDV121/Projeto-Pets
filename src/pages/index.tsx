import type { NextPage } from "next";
import Titulo from "../ui/components/Titulo/Titulo";
import Lista from "../ui/components/Lista/Lista";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useindex";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  } = useIndex();

  return (
    <div>
      <Titulo
        titulo="Meu sonho de ser desenvlvedor !!"
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            <strong> pode adotar um pet virtualmente</strong>
          </span>
        }
      />

      <Lista pets={listaPets} onSelect={(pet) => setPetSelecionado(pet)} />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { padding: "40px" } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label={"E-Mail"} fullWidth type={"email"} value={email} onChange = {(e)=> setEmail(e.target.value) } /> 
          </Grid>
          <Grid item xs={12}>
            <TextField label={"Quantia por mês"} fullWidth type={"number"} value={valor} onChange = {(e)=> setValor(e.target.value) } />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: 5 }}>
          <Button color={"secondary"} onClick={() => setPetSelecionado(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={()=> adotar()}>Confirmar Adoção</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={mensagem.length > 0 } message={""} autoHideDuration= {2500} onClose={() => setMensagem('') }/>
    </div>
  );
};

export default Home;
