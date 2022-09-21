const express = require("express");
const RecipeModel = require("../models/Recipe.model");
const UserModel = require("../models/User.model");
const router = express.Router()

//1º rota: Criar um user
router.post("/create", async (req, res) => {
    try {

        const newUser = await UserModel.create({...req.body})

        return res.status(201).json(newUser)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//2º rota: Pegar todos os users
router.get("/all", async (req, res) => {
    try {

        const allUsers = await UserModel.find()

        return res.status(200).json(allUsers)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//3º rota: Acessar um usuário pelo seu ID
router.get("/user/:id", async (req, res) => {
    try {

        const {id} = req.params

        const user = await UserModel.findById(id)
        
        return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})

//4º Adicionar uma receita na array de favorites
router.post("/favorites/:idRecipe/:idUser", async (req, res) => {

    const {idUser, idRecipe} = req.params

    const favorite = await UserModel.findByIdAndUpdate(idUser, {
        $push: {
            favorites: idRecipe
        }
    },
    {new: true}
    )
    return res.status(200).json(favorite)
})

//5º Adicionar uma receita na array de deslikes
router.post("/dislikes/:idRecipe/:idUser", async (req, res) => {

    const {idUser, idRecipe} = req.params

    const dislike = await UserModel.findByIdAndUpdate(idUser, {
        $push: {
            dislikes: idRecipe
        }
    },
    {new: true}
    )
    return res.status(200).json(dislike)
})

//6º Remover uma receita na array de favorite
router.put("/unfavorite/:idRecipe/:idUser", async (req, res) => {

    const {idUser, idRecipe} = req.params

    const unfavorite = await UserModel.findByIdAndUpdate(idUser, {
        $pull: {
            favorites: idRecipe
        }
    },
    {new: true}
    )
    return res.status(200).json(unfavorite)
})

//7º Remover uma receita na array de deslikes
router.put("/undislike/:idRecipe/:idUser", async (req, res) => {

    const {idUser, idRecipe} = req.params

    const undislike = await UserModel.findByIdAndUpdate(idUser, {
        $pull: {
            dislikes: idRecipe
        }
    },
    {new: true}
    )
    return res.status(200).json(undislike)
})





module.exports = router