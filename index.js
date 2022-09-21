/* 
In index.js, after the connection to the database has been established, you should add a new recipe document to the database by calling the Model.create static, passing it the recipe details as an object. After inserting the recipe, you should console.log the title of the recipe.

You can use MongoDB Compass to double check that everything is working as intended.

To run your code, remember you should use:

$ node index.js

_Tip:_
 When you have successfully created a new recipe (you see it in the database using Compass tool), you might want to comment out this step. The reason for this is that next time when you run $ node index.js, it will try to create a new recipe with the same name and you will get an error in the terminal related to the duplicate keys - the title should be unique, and the dish with that title already exists in the database. */

 const express = require("express")
 const cors = require("cors")
 require("dotenv").config()
 const dbConnection = require("./config/db.config")
 dbConnection()

 const app = express()

 app.use(express.json())
 app.use(cors({origin: process.env.REACT_APP_URI}))

 //ROTAS
 const RecipesRoute = require("./routes/recipes.routes")
 app.use("/recipes", RecipesRoute)

 const UsersRoute = require("./routes/users.routes")
 app.use("/users", UsersRoute)


 app.listen(Number(process.env.PORT), () => {
    console.log("Server up and running on port", process.env.PORT)
 })