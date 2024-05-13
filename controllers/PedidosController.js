import express from 'express'
const router = express.Router()

router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "12313", valor: 1500, tipoPagamento: "Cartão de Crédito", status:"Aguardando Pagamento"},
        {numero: "32131", valor: 2500, tipoPagamento: "Transferência Bancária", status:"Em Processamento"},
        {numero: "32323", valor: 4500, tipoPagamento: "Boleto Bancário", status:"Aguardando Confirmação de Pagamento"},
        {numero: "34564", valor: 8500, tipoPagamento: "Pix", status:"Enviado para Entrega"},
        {numero: "56756", valor: 5600, tipoPagamento: "Dinheiro (Na entrega)", status:"Entregue"},
        {numero: "98372", valor: 3200, tipoPagamento: "Cartão de Débito", status:"Cancelado"},
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

export default router