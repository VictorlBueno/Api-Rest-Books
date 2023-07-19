import "dotenv/config";
import app from "./src/app.js";

// Usa a porta que já está no ambiente de produção OU a define 3000
const port = process.env.PORT || 3000;

// aponta a porta para o servidor usando express
app.listen(port, () => {
    // confirma que está escutando
    console.log(`Servidor escutando na porta http://localhost:${port}`);
});