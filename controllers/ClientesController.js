import express from "express"
const router = express.Router()

router.get("/clientes", (req, res) =>{
    const clientes = [
        {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Rua das Palmeiras, 456, Bairro Primavera, Cidade do Sol, MG"},
        {nome: "Mariana Oliveira", cpf: "123.456.789-00", endereco: "Avenida das Flores, 789, Bairro Centro, Cidade Nova, SP"},
        {nome: "Guilherme Santos", cpf: "654.321.987-00", endereco: "Rua dos Girassóis, 101, Bairro Azul, Cidade das Ondas, PR"},
        {nome: "Beatriz Costa", cpf: "456.789.123-00", endereco: "Alameda dos Pássaros, 222, Bairro Verde, Cidade das Montanhas, MG"},
        {nome: "Lucas Silva", cpf: "321.654.987-00", endereco: "Avenida Central, 555, Bairro Celestial, Cidade da Lua, SP"},
        {nome: "Ana Pereira", cpf: "789.123.456-00", endereco: "Praça das Águias, 777, Bairro Voo Alto, Cidade dos Ventos, PR"},
        {nome: " Isabella Lima", cpf: "111.222.333-00", endereco: " Estrada dos Sonhos, 888, Bairro Tranquilidade, Cidade das Maravilhas, MG"}
    ]
    res.render("clientes", {
        clientes : clientes
    })
})

export default router