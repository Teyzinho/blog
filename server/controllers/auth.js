const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const secret = process.env.SECRET;

exports.register = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Este email já está registrado.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            name,
            password: hashedPassword
        })

        res.status(201).json(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao registrar' })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userDoc = await User.findOne({ email }) //Procura o usuário pelo email
        const passOk = bcrypt.compareSync(password, userDoc.password) // usa a senha encriptada para comparar com a senha do banco do usuário

        if (passOk) {
            jwt.sign({ email, id: userDoc._id }, secret, {}, (error, token) => {
                if (error) throw error;
                res.cookie('token', token).json({
                    id: userDoc._id,
                    email,
                })
            })
        } else {
            res.status(400).json('Credenciais erradas')
        }



    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao logar' })
    }
}