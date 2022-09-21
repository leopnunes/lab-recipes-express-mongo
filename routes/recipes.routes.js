//Escreva suas rotas para as receitas aqui//
//Importe o express e instancie o Router aqui
const { response } = require("express");
const express = require("express")
const router = express.Router()


// Importe os models aqui
const RecipeModel = require("../models/Recipe.model");
const UserModel = require("../models/User.model");

//1º rota: Criar uma receita
//CRIAR RECEITA
router.post("/create", async (req, res) => {
    try {

        const newRecipe = await RecipeModel.create({...req.body})

        return res.status(201).json(newRecipe)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//2º rota: Acessar todas as receitas
//ALL RECIPES
router.get("/all", async (req, res) => {
    try {

        const allRecipes = await RecipeModel.find()

        return res.status(200).json(allRecipes)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//3º rota: Acessar uma única receita pelo seu ID
router.get("/recipe/:id", async (req, res) => {
    try {

        const {id} = req.params

        const recipe = await RecipeModel.findById(id)

        return res.status(200).json(recipe)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//4º rota: Criar várias receitas de uma só vez

//6º rota: Acessar todos os usuários que favoritaram essa receita (populate)

//7º rota: Acessar todos os usuários que deram dislike essa receita (populate)

//!5º rota: Deletar uma receita pelo seu ID - retira-la da array de favorites e dislikes dos USERS

//Não se esqueça de exportar o router!
module.exports = router