const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório'],
        unique: true,
        lowercase: true,
        trim: true
    },
    senha: {
        type: String,
        required: [true, 'A senha é obrigatória'],
        select: false // Não retorna a senha por padrão nas consultas
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    },
    telefone: {
        type: String
    },
    inscricoes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
