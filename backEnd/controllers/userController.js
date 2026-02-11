const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { nome, email, senha, telefone } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe" });
        }

        const newUser = new User({
            nome,
            email,
            senha, // O modelo User tem select: false, mas salvará normalmente
            telefone,
            role: 'client'
        });

        await newUser.save();

        const userResponse = await User.findById(newUser._id).select('-senha');
        res.status(201).json(userResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Em produção, use bcrypt para comparar senhas. 
        // Aqui estamos comparando texto puro conforme o fluxo atual.
        const user = await User.findOne({ email }).select('+senha');

        if (!user || user.senha !== senha) {
            return res.status(401).json({ error: "Credenciais inválidas" });
        }

        const userWithoutPassword = await User.findById(user._id).select('-senha');
        res.json({ msg: "Login realizado com sucesso", user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        // Simulação sem middleware de auth por enquanto
        res.json({ msg: "Rota de perfil pronta para lógica de DB" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
