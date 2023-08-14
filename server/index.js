const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') // ler os cookies

const connectToDatabase = require('./config/db')
const authRoutes = require('./routes/auth')

//Config
const app = express()
app.use(express.json());
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(cookieParser())

// env Config
dotenv.config();

// Conexão db
connectToDatabase()

// Rotas
app.use('/auth' , authRoutes)

const PORT = process.env.PORT || 5000 // Configuração da port
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})