const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'O título do curso é obrigatório']
    },
    descricao: {
        type: String
    },
    categoria: {
        type: String,
        enum: ['Unhas', 'Cílios', 'Sobrancelhas', 'Facial', 'Depilação'],
        required: true
    },
    nivel: {
        type: String,
        enum: ['Básico', 'Intermediário', 'Avançado'],
        default: 'Básico'
    },
    preco: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    vagas: {
        type: Number,
        default: 0
    },
    trilhaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pathway'
    },
    imagem: {
        type: String // URL da imagem do curso
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', courseSchema);
