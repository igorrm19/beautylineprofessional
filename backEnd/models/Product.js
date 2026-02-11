const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome do produto é obrigatório']
    },
    descricao: {
        type: String
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: {
        type: String, // Principal categoria (ex: Skin Renew)
        required: true
    },
    subcategoria: {
        type: String
    },
    tags: [{
        type: String
    }],
    marca: {
        type: String,
        default: 'Beauty Line'
    },
    estoque: {
        type: Number,
        default: 0
    },
    imagem: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
