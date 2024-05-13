import express from "express"
const router = express.Router()

router.get("/produtos", (req,res) =>{
    const produtos = [
        {nome: "iPhone 13 Pro", categoria: "Smartphones", preco: 6999, qtdEstoque: "50 unidades"},
        {nome: "MacBook Pro 16", categoria: " Notebooks", preco: 15999, qtdEstoque: "20 unidades"},
        {nome: "Apple Watch Series 7", categoria: "Smartwatches", preco: 2499, qtdEstoque: "100 unidades"},
        {nome: "AirPods Pro", categoria: "Acessorios", preco: 1499, qtdEstoque: "200 unidades"},
        {nome: "HomePod Mini", categoria: "Acessorios", preco: 699, qtdEstoque: "100 unidades"},
        {nome: "Magic Mouse 2", categoria: "Acessorios", preco: 549, qtdEstoque: "50 unidades"},
        {nome: "AirTag", categoria: "Acessorios", preco: 1200, qtdEstoque: "60 unidades"},
        {nome: "Apple Pencil", categoria: "Acessorios", preco: 219, qtdEstoque: "80  unidades"},
        {nome: "MagSafe Charger", categoria: "Acessorios", preco:  399, qtdEstoque: "25  unidades"},
        {nome: "MacBook Air", categoria: "Notebooks", preco: 8999, qtdEstoque: "3 unidades"},
        {nome: "iPhone SE", categoria: "Smartphones", preco: 3499, qtdEstoque: "13 unidades"},
        {nome: "AirPods Max", categoria: "Acessorios", preco: 4499, qtdEstoque: "10 unidades"},
        {nome: "Apple Watch SE", categoria: "Acessorios", preco: 1999, qtdEstoque: "3 unidades"}
    ]
    res.render("produtos", {
        produtos: produtos
    })
})


export default router