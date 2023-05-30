import app from "./app";
let port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}`);
});
