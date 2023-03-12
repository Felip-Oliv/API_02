const ModelProduto = require('../models/produto.model');

module.exports = 
{
    async List(req, res){
        try {
               const produtos = await ModelProduto.findAll();
               return res.json(produtos);

        } catch (erro) {
            return console.error("Erro na list: ", erro);
            
        }
        
    },

    async Create(req, res){
        try {
               const produtos = await ModelProduto.create(
                {
                    Codigo : req.body.Codigo,
                    Descricao : req.body.Descricao,
                    DataCriacao : req.body.DataCriacao,
                    DataAtualizacao : null


                }
               );

               return res.json("Produto criado com sucesso!!", produtos);

        } catch (erro) {
            return console.error("Erro na Create: ", erro);
            
        }
        
    },

    async Update(req, res){

        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            if(prod) {
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date();
                await prod.save();
            }
            return res.json("Alteração realizada com sucesso!! ", prod)

        } catch (erro) {
            return console.error("Erro no Update: ", erro);
            
        }
        
    },

    async GetOne(req, res){
        
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);

            return res.json("Produto!! ", prod)

        } catch (erro) {
            return console.error("Erro no GetOne: ", erro);
            
        }
        
    },
    async Delete(req, res){
        
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            await prod.destroy();
            return res.json("Produto Deletado: ", prod)

        } catch (erro) {
            return console.error("Erro no Delete: ", erro);
            
        }
        
    }
}