//Faça a conexão com o banco de dados (mongoDB) aqui

const mongoose = require("mongoose")

async function connect() {
    try {

        const dbConnection = await mongoose.connect(process.env.MONGODB_URI)

        console.log(
            "Conectado com sucesso no banco de dados",
            dbConnection.connection.name
        )
        
    } catch (error) {
        console.log("Conexão com o banco de dados com erro", error)
    }
}


//Não se esqueça de exportar a função
module.exports = connect