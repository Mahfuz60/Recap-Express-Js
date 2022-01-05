const app = require("./app");
const PORT = 3000;
const host = "127.10.0.1";

app.listen(PORT, host, () => {
  console.log(`server is running at http://${host}:${PORT}`);
});
