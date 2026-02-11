const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome do equipamento é obrigatório']
    },
    descricao: {
        type: String
    },
    imagem: {
        type: String
    },
    opcoes: {
        venda: {
            type: Number
        },
        aluguel: {
            type: Number
        }
    },
    especificacoes: [{
        type: String
    }],
    tag: {
        type: String, // ex: 'Novidade', 'Mais Alugado'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Equipment', equipmentSchema);
