const express = require("express");
const path = require("path");

const app = express();

// ========================================
// CONFIGURAÇÃO DO EJS
// ========================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// ========================================
// MIDDLEWARES
// ========================================

// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));

// Permite receber requisições com JSON
app.use(express.json());


// ========================================
// ROTAS
// ========================================

const categoriaRoutes = require("./routes/categoriaRoutes");

app.use("/categorias", categoriaRoutes);

const clienteRoutes = require("./routes/clienteRoutes");

app.use("/clientes", clienteRoutes);

const fornecedoresRoutes = require("./routes/fornecedoresRoutes");

app.use("/fornecedores", fornecedoresRoutes);

const produtosRoutes = require("./routes/produtosRoutes");

app.use("/produtos", produtosRoutes);


// ========================================
// ROTA PRINCIPAL - index.ejs de Views
// ========================================

app.get("/", (req, res) => {

    res.render("index");

});


// ========================================
// SERVIDOR
// ========================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);


    

});

