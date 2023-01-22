const produtos = require("./bancoDados/produtos")
const { getStateFromZipcode } = require("utils-playground")


const listarProdutos = (req, res) => {
    return res.status(200).json(produtos)
}

const exibirProduto = (req, res) => {
    const { idProduto } = req.params

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto)
    })
    if (!produto) {
        return res.status(400).json({ mensagem: "produto não localizado." })
    }
    return res.status(200).json(produto)
}

const calcularFrete = (req, res) => {

}


module.exports = {
    listarProdutos,
    exibirProduto
}













/*
const listarProdutos = (req, res) => {
    return res.status(200).json(produtos)
}

const exibirProduto = (req, res) => {
    const { idProduto } = req.params

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto)
    })
    if (!produto) {
        return res.status(400).json({mensagem: "produto não localizado"})
    }
}

module.exports = {
    listarProdutos,
    exibirProduto
} */