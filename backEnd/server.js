const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// Conectar ao Banco de Dados
connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

// Importar Rotas
const userRoutes = require("./router/userRoutes");
const courseRoutes = require("./router/courseRoutes");

app.use(cors())
app.use(express.json());

// Usar Rotas
app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);

app.get("/teste", (req, res) => {
    res.json({ msg: "Hello word" })
})

app.listen(PORT, () => {
    console.log("Server running in port ", PORT)
})

