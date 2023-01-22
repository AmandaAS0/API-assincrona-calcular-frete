const { Router } = require("express");
const {
    listarProdutos,
    exibirProduto
} = require("./controladores");

const rota = Router()


rota.get("/produtos", listarProdutos)
rota.get("/produtos/:idProduto", exibirProduto)


module.exports = rota