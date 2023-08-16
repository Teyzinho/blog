const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') // ler os cookies

const connectToDatabase = require('./config/db')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')

//Config
const app = express()
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(cookieParser())

// env Config
dotenv.config();

// Conexão db
connectToDatabase()

// Rotas
app.use('/auth', authRoutes)
app.use('/post', postRoutes)

const PORT = process.env.PORT || 5000 // Configuração da port
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})