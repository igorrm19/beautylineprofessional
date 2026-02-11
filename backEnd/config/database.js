const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data');

const readData = (filename) => {
    try {
        const filePath = path.join(dataPath, filename);
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao ler ${filename}:`, error);
        return [];
    }
};

const writeData = (filename, data) => {
    try {
        const filePath = path.join(dataPath, filename);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error(`Erro ao escrever ${filename}:`, error);
        return false;
    }
};

module.exports = { readData, writeData };
