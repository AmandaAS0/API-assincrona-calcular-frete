const app = require("./servidor")
const PORT = 3100

app.listen(PORT, () => console.log(`servidor escutando na porta ${PORT}`))