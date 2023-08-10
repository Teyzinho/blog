const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ksz4aqt.mongodb.net/?retryWrites=true&w=majority`)
        return console.log('Conexão ao Db realizada com sucesso!')
    } catch (error) {
        return console.log('Erro ao conectar ao Database', error)
    }
}

module.exports = connectToDatabase